"use strict";
var L10_Virus;
(function (L10_Virus) {
    class Vector {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
        //Für die Geschwindigkeit werden willkürliche Daten festgelegt
        random(_minLength, _maxLength) {
            let length = _minLength + Math.random() * (_maxLength - _minLength);
            let direction = Math.random() * 2 * Math.PI;
            this.set(Math.cos(direction), Math.sin(direction));
            this.scale(length);
        }
    }
    L10_Virus.Vector = Vector;
})(L10_Virus || (L10_Virus = {}));
//# sourceMappingURL=Vector.js.map