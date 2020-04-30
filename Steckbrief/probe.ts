'use strict';

import http = require("http");
import fs = require("fs");

class Student {
    fullname: string;
    constructor(public firstname, public lastname) {
        this.fullname = firstname + " " + lastname;
    }
}

interface Person {
    firstname: string;
    lastname: string;
}

function sayHello(person: Person) {
    return "Hello, " + person;
}