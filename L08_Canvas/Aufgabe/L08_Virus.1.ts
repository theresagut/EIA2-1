namespace L08_Virus {
    let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
    let crc2: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext("2d");
    let width: number;
    let height: number;

    window.addEventListener("load", createImage);
    window.addEventListener("resize", createImage);

    function createImage(): void {
        resizeCanvas();
        createBackground();
        createCells();
    }

    function createBackground(): void {
        let pattern: CanvasRenderingContext2D = <CanvasRenderingContext2D>document.createElement('canvas').getContext('2d');
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
        pattern.strokeStyle = "#88888844";
        pattern.stroke();
        pattern.closePath();
        pattern.beginPath();
        pattern.arc(50, 20, 2, 0, 2 * Math.PI);
        pattern.fillStyle = "#88888844";
        pattern.fill();
        pattern.beginPath();
        pattern.arc(95, 40, 2, 1 * Math.PI, 0);
        pattern.fillStyle = "#88888844";
        pattern.fill();

        pattern.beginPath();
        pattern.arc(95, 0, 2, 0 * Math.PI, 1 * Math.PI);
        pattern.fillStyle = "#88888844";
        pattern.fill();

        crc2.fillStyle = <CanvasRenderingContext2D>crc2.createPattern(pattern.canvas, "repeat");
        crc2.fillRect(0, 0, canvas.width, canvas.height);
    }

    function resizeCanvas(): void {
        width = window.innerWidth;
        canvas.setAttribute("width", width + "px");
        height = window.innerHeight;
        canvas.setAttribute("height", height + "px");
        //Set a light blue Background-color, fill a rectangle with it 
        crc2.fillStyle = "#97a0db33";
        crc2.fillRect(0, 0, width, height);
    }

    function createCells(): void {
        let numCircles: number = (width + height) / 5;
        let maxRadius: number = 20;
        let minRadius: number = 5;
        let colors: string[] = ["#fbcde2", "#c57ea2", "#f5aacf", "#fdddec"];
        let bigCellColors: string[] = ["#1bd080", "#55f6a2", "#54b27d", "#00ab5f"];
        let particleColors: string[] = ["#ffcc01", "#ffac16", "#ff9026", "#ffd644"];
        let nucleusColors: string[] = ["#888888", "#373737", "#4a4a4a", "#444444"];
        let numColors: number = colors.length;
        let xPos: number;
        let yPos: number;
        let radius: number;
        let colorIndex: number;
        let color: string;
        let nucleusColor: string;
        let bigCell: boolean;
        let particle: boolean;
        let storage: number = 0;
        let coronaPosition: number = 10;
        let j: number;
        let particles: number;
        if (width > 800) {
            numCircles = numCircles;
            j = Math.floor(width / 50);
            particles = 800;
        }
        else {
            numCircles = numCircles / 2;
            j = 3;
            particles = 150;
        }
        for (let i = 0; i < numCircles; i++) {
            xPos = Math.random() * canvas.width;
            yPos = Math.random() * canvas.height;
            radius = minRadius + (Math.random() * (maxRadius - minRadius));
            colorIndex = Math.round(Math.random() * (numColors - 1));
            color = colors[colorIndex];
            nucleusColor = nucleusColors[colorIndex];
            bigCell = false;
            particle = false;
            drawCell(xPos, yPos, radius, color, nucleusColor, bigCell, particle);
        }
        while (storage < width) {
            maxRadius = 40;
            minRadius = 30;
            yPos = 80;
            radius = minRadius + (Math.random() * (maxRadius - minRadius));
            xPos = storage + radius;
            storage = xPos + radius;
            colorIndex = Math.round(Math.random() * (numColors - 1));
            color = bigCellColors[colorIndex];
            nucleusColor = nucleusColors[colorIndex];
            bigCell = true;
            particle = false;
            drawCell(xPos, yPos, radius, color, nucleusColor, bigCell, particle);
        }

        for (let i = 0; i < j; i++) {
            radius = 50;
            xPos = coronaPosition + radius;
            coronaPosition = xPos + radius;
            yPos = 200 + (50 * Math.random());
            createCoronaCell(xPos, yPos);

            if (i < j - 1) {
                xPos = coronaPosition + radius + 10;
                yPos = 320 + (50 * Math.random());
                createCoronaCell(xPos, yPos);
            }
        }


        createMacrophage(width - 100, 480);
        createMacrophage(width - 300, 460);

        for (let i = 0; i < 4; i++) {
            radius = 15;
            xPos = Math.random() * canvas.width / 1.5;
            yPos = 450 + (20 * Math.random());
            createAntibodies(xPos, yPos);

            if (i < 3) {
                xPos = Math.random() * canvas.width / 1.5;
                yPos = 530 + (20 * Math.random());
                createAntibodies(xPos, yPos);
            }
        }

        for (let i = 0; i < particles; i++) {
            maxRadius = 3;
            minRadius = 1;
            xPos = Math.random() * canvas.width;
            yPos = Math.random() * canvas.height;
            radius = minRadius + (Math.random() * (maxRadius - minRadius));
            colorIndex = Math.round(Math.random() * (numColors - 1));
            color = particleColors[colorIndex];
            nucleusColor = nucleusColors[colorIndex];
            bigCell = false;
            particle = true;
            drawCell(xPos, yPos, radius, color, nucleusColor, bigCell, particle);
        }
    }

    function drawCell(_xPos: number, _yPos: number, _radius: number, _color: string, _nucleusColor: string, _size: boolean, _particle: boolean) {
        crc2.save();
        let startAngle = (Math.PI / 180);
        let endAngle = (Math.PI / 180) * 360;
        crc2.shadowColor = "gray";
        crc2.shadowOffsetX = 1;
        crc2.shadowOffsetY = 1;
        crc2.shadowBlur = 5;
        let rotation: number = Math.random() * 360;
        let pattern: CanvasRenderingContext2D = <CanvasRenderingContext2D>document.createElement('canvas').getContext('2d');
        pattern.canvas.width = 2;
        pattern.canvas.height = 2;

        pattern.fillStyle = _color + "33";
        pattern.fillRect(0, 0, pattern.canvas.width, pattern.canvas.height);
        pattern.arc(2, 2, Math.floor(Math.random() * 2), 0, 2 * Math.PI);
        pattern.strokeStyle = _color + "55";
        pattern.stroke();

        crc2.fillStyle = <CanvasRenderingContext2D>crc2.createPattern(pattern.canvas, "repeat");
        crc2.beginPath();
        if (_size == true) {
            rotation = 0;
            crc2.ellipse(_xPos, _yPos, _radius, _radius * Math.random() + _radius, rotation, startAngle, endAngle);
            crc2.closePath();
            crc2.strokeStyle = _color;
            crc2.fillStyle = _color;
        }
        else {
            crc2.ellipse(_xPos, _yPos, _radius, _radius * Math.random() + _radius, rotation, startAngle, endAngle);
            crc2.closePath();
            crc2.strokeStyle = _color + "88";
            crc2.fillStyle = pattern;
        }
        crc2.stroke();
        crc2.fill();

        if (_particle == false) {
            crc2.beginPath();
            if (_size == true) {
                crc2.arc(_xPos + 2, _yPos - (25 * Math.random()), 10, Math.random(), 1.95 * Math.PI);
                crc2.fillStyle = _nucleusColor + "66";
            }
            else {
                crc2.arc(_xPos + 2, _yPos - 3, 3, Math.random(), 1.7 * Math.PI);
                crc2.fillStyle = _nucleusColor + "33";
            }
            crc2.closePath();
            crc2.fill();
        }
    }

    function createCoronaCell(_xPosition: number, _yPosition: number): void {
        crc2.restore();
        crc2.shadowColor = "rgba(173, 216, 230, 0)";
        crc2.save();
        crc2.translate(_xPosition, _yPosition);

        for (let i = 0; i < 9; i++) {
            crc2.beginPath();
            crc2.rotate(30);
            crc2.moveTo(0, 40);
            crc2.lineTo(0, 45);
            crc2.strokeStyle = "#777777";
            crc2.lineWidth = 3;
            crc2.stroke();
            crc2.closePath();
            crc2.beginPath();
            crc2.arc(0, 45, 10, 0, 1 * Math.PI);
            crc2.fillStyle = "#cb341a";
            crc2.fill();
        }
        crc2.beginPath();
        crc2.arc(0, 0, 40, 0, 2 * Math.PI);
        crc2.fillStyle = "#ae2d16";
        crc2.fill();
        crc2.closePath();
        crc2.restore();

    }

    function createAntibodies(_xPos: number, _yPos: number): void {

        crc2.save();
        crc2.translate(_xPos, _yPos);
        crc2.beginPath();
        crc2.rotate(Math.random() * 360);
        crc2.moveTo(0, 0);
        crc2.lineTo(0, 24);
        crc2.strokeStyle = "#114d89";
        crc2.lineWidth = 2;
        crc2.stroke();
        crc2.closePath();
        crc2.beginPath();
        crc2.arc(0, 36, 12, 0, 1 * Math.PI, true);
        crc2.stroke();
        crc2.restore();
    }

    function createMacrophage(_xPosition: number, _yPosition: number): void {
        crc2.beginPath();
        crc2.arc(_xPosition + 40, _yPosition + 40, 40, 0, 2 * Math.PI);
        crc2.arc(_xPosition + 18, _yPosition + 12, 35, 0, 2 * Math.PI);
        crc2.arc(_xPosition + 80, _yPosition + 52, 30, 0, 2 * Math.PI);
        crc2.fillStyle = "#008080";
        crc2.closePath();
        crc2.fill();

        // Add a nucleus 
        crc2.beginPath();
        crc2.arc(_xPosition + 40, _yPosition + 40, 7, 0, 2 * Math.PI);
        crc2.fillStyle = "darkslategrey";
        crc2.closePath();
        crc2.fill();
    }
}
