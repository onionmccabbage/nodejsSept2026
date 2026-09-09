// Everything in JS is an object
// all objects inherit prototypically
//... but we can make them look like standard class objects

class Photo { // by default inherit from 'object'
    // optionally we may write ONE constructor
    // we pass properties into the constuctor
    constructor(title, url){ // the constructor runs ONCE when an instance is created
        this.title = title
        this.url   = url
    }
    // we may also choose to write methods (i.e. functions)
    prettyPrint(){
        return `This photo is ${this.title} available at ${this.url}`
    }
}

// make instances of our class
p1 = new Photo('A cat', 'https://nonsuch.org') // runs the class constructor

console.log(p1, p1.title)
p1['title'] = 'a dog' // we can mutate the properties
// or
console.log(p1, p1['title']) // we must quote the property name
console.log(p1.prettyPrint())