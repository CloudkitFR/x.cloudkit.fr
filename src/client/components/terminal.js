
//////////////////////////////////////////////////
//  TERMINAL
//////////////////////////////////////////////////


export default {

    props: [ "onready", "onclose" ],

    render() {
        return (
            <div id="terminal" ref="terminal">
                <div style="height: 100%" />
            </div>
        );
    },

    mounted() {
        const self      = this;
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
            term.write(`
  /$$$$$$  /$$        /$$$$$$  /$$   /$$ /$$$$$$$  /$$   /$$ /$$$$$$ /$$$$$$$$
 /$$__  $$| $$       /$$__  $$| $$  | $$| $$__  $$| $$  /$$/|_  $$_/|__  $$__/
| $$  \\__/| $$      | $$  \\ $$| $$  | $$| $$  \\ $$| $$ /$$/   | $$     | $$   
| $$      | $$      | $$  | $$| $$  | $$| $$  | $$| $$$$$/    | $$     | $$   
| $$      | $$      | $$  | $$| $$  | $$| $$  | $$| $$  $$    | $$     | $$   
| $$    $$| $$      | $$  | $$| $$  | $$| $$  | $$| $$\\  $$   | $$     | $$   
|  $$$$$$/| $$$$$$$$|  $$$$$$/|  $$$$$$/| $$$$$$$/| $$ \\  $$ /$$$$$$   | $$   
 \\______/ |________/ \\______/  \\______/ |_______/ |__/  \\__/|______/   |__/   
                                                                              
                                                                              
Welcome, LXGIC !
Your system is running on Cloudkit OS (build 1002).
                                                                              
                                                                              
`);
            fit.fit(term);

            // Call ready handler.
            self.$props.onready();
        };

        // Call close handler.
        ws.onclose = function () {
            self.$props.onclose();
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
