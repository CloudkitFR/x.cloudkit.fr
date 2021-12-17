
//////////////////////////////////////////////////
//  TERMINAL
//////////////////////////////////////////////////


export default {

    render() {
        return (
            <div id="terminal" ref="terminal">
                <div style="height: 100%" />
            </div>
        );
    },

    mounted() {
        const node      = document.getElementById("terminal").firstElementChild;
        const ws        = new WebSocket(`ws://${location.host}`);
        const term      = new Terminal({
            convertEol          : true,
            allowTransparency   : true,
            rendererType        : "canvas",
            fontFamily          : "Jetbrains Mono, monospace"
        });

        ws.onopen = function () {
            window.onresize = function () {
                fit.fit(term);
            };

            term.on("resize", function (data) {
                ws.send("\u0000" + JSON.stringify(data));
            });

            term.on("data", function (data) {
                ws.send(data);
            });

            term.open(node);
            fit.fit(term);
        };

        ws.onmessage = function ({ data }) {
            term.write(data);
        };

        this.ws = ws;
    },

    unmounted() {
        this.ws?.close();
    }
}
