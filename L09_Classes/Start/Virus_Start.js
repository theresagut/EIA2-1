var L09_Virus;
(function (L09_Virus) {
    function createBackground() {
        //To make the Background look more interesting, I create a simple pattern, imitating cells. 
        //The opacity is not very high so that the pattern does not distract form the bigger cells. 
        let pattern = document.createElement('canvas').getContext('2d');
        pattern.canvas.width = 100;
        pattern.canvas.height = 40;
        pattern.fillStyle = "#97a0db3a";
        pattern.fillRect(0, 0, pattern.canvas.width, pattern.canvas.height);
        pattern.moveTo(0, 20);
        pattern.lineTo(20, 20);
        pattern.lineTo(40, 0);
        pattern.lineTo(60, 0);
        pattern.lineTo(100, 20);
        pattern.lineTo(60, 40);
        pattern.lineTo(40, 40);
        pattern.lineTo(20, 20);
        //Draw the pattern for the cell membranes
        pattern.strokeStyle = "#88888844";
        pattern.stroke();
        pattern.closePath();
        //Draw the nuclei 
        pattern.beginPath();
        pattern.arc(50, 20, 2, 0, 2 * Math.PI);
        pattern.fillStyle = "#88888844";
        pattern.fill();
        //Since the pattern cuts some cells in half, I draw two semicircles, one at the top and one at the bottom
        //By repeating the pattern, whole circles are created.
        pattern.beginPath();
        pattern.arc(95, 40, 2, 1 * Math.PI, 0);
        pattern.fillStyle = "#88888844";
        pattern.fill();
        pattern.beginPath();
        pattern.arc(95, 0, 2, 0 * Math.PI, 1 * Math.PI);
        pattern.fillStyle = "#88888844";
        pattern.fill();
        L09_Virus.crc2.fillStyle = L09_Virus.crc2.createPattern(pattern.canvas, "repeat");
        L09_Virus.crc2.fillRect(0, 0, L09_Virus.canvas.width, L09_Virus.canvas.height);
    }
    L09_Virus.createBackground = createBackground;
    function resizeCanvas() {
        //Make the Canvas as big as the screen of the used device 
        L09_Virus.width = window.innerWidth;
        L09_Virus.canvas.setAttribute("width", L09_Virus.width + "px");
        L09_Virus.height = window.innerHeight;
        L09_Virus.canvas.setAttribute("height", L09_Virus.height + "px");
        //Set a light blue Background-color, fill a rectangle with it 
        L09_Virus.crc2.fillStyle = "#97a0db33";
        //The rectangle is bigger as the canvas, making sure there are no margins in the background-color
        L09_Virus.crc2.fillRect(0, 0, L09_Virus.width, L09_Virus.height);
    }
    L09_Virus.resizeCanvas = resizeCanvas;
})(L09_Virus || (L09_Virus = {}));
//# sourceMappingURL=Virus_Start.js.map