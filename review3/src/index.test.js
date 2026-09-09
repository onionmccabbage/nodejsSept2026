import { beforeEach, afterEach, describe, expect, it, vi } from "vitest";

// Added index.test.js with Vitest coverage for:
// No CLI IDs
// Fetching and logging multiple IDs
// Logging rejected fetch errors

const fetchPhotos = vi.fn();

vi.mock("./util/getData.js", () => ({
    fetchPhotos
}));

const originalArgv = process.argv;

const loadIndex = async (args = []) => {
    process.argv = ["node", "index.js", ...args];
    // await import(`./index.js?args=${args.join(",")}`);
    await import(`./index.js?args=[1,4]`);
    await Promise.resolve();
};

describe("index", () => {
    beforeEach(() => {
        vi.resetModules();
        fetchPhotos.mockReset();
        vi.spyOn(console, "log").mockImplementation(() => {});
    });

    afterEach(() => {
        process.argv = originalArgv;
        vi.restoreAllMocks();
    });

    it("does not fetch photos when no ids are supplied", async () => {
        await loadIndex();

        expect(fetchPhotos).not.toHaveBeenCalled();
        expect(console.log).not.toHaveBeenCalled();
    });

    it("fetches every supplied id and logs each result", async () => {
        fetchPhotos.mockImplementation(async (id) => ({ id }));

        await loadIndex(["3", "8"]);

        expect(fetchPhotos).toHaveBeenNthCalledWith(1, "3");
        expect(fetchPhotos).toHaveBeenNthCalledWith(2, "8");
        expect(console.log).toHaveBeenCalledWith({ id: "3" });
        expect(console.log).toHaveBeenCalledWith({ id: "8" });
    });

    it("logs a problem when fetching an id fails", async () => {
        fetchPhotos.mockRejectedValue(new Error("request failed"));

        await loadIndex(["4"]);

        expect(console.log).toHaveBeenCalledWith("Problem: Error: request failed");
    });
});