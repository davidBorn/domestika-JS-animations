const canvasSketch = require("canvas-sketch");

const settings = {
    dimensions: [1080, 1080],
};

const sketch = () => {
    let x, y, w, h, rx, ry;

    const num = 20;

    return ({ context, width, height }) => {
        context.fillStyle = "white";
        context.fillRect(0, 0, width, height);

        x = width * 0.5;
        y = height * 0.5;
        w = width * 0.6;
        h = height * 0.1;

        context.save();
        context.translate(x, y);

        context.strokeStyle = "blue";
        //context.strokeRect(w * -0.5, h * -0.5, w, h);

        for (i = 0; i < num; i++) {
            drawSkewedRect({
                context,
                w: 200 + Math.floor(Math.random() * 100),
                h: 200 + Math.floor(Math.random() * 100),
            });
        }
        context.stroke();

        context.restore();
    };
};

const drawSkewedRect = ({ context, w = 600, h = 200, angle = 45 }) => {
    const radians = (angle / 180) * Math.PI;

    const rx = Math.cos(radians) * w;
    const ry = Math.sin(radians) * w;

    context.save();

    context.translate(rx * -0.5, (ry + h) * -0.5);
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(rx, ry);
    context.lineTo(rx, ry + h);
    context.lineTo(0, h);
    context.closePath();

    context.stroke();
    context.restore();
};

canvasSketch(sketch, settings);
