import * as Http from "http";
import * as Url "url";
import * as Mogo from "mongodb";

export namespace Haushaltshilfe_7 {
    interface Order {
        [ type:string]:string | undefined| string[];
    }