
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
        const terminal  = document.getElementById("terminal").firstElementChild;
        const term      = new Terminal({
            convertEol          : true,
            allowTransparency   : true,
            rendererType        : "dom",
            fontFamily          : "Jetbrains Mono, monospace"
        });

        term.open(terminal);
        term.write("\x1B[38;5;3mKARDOS$ \x1B[0mYo les mecs");
        fit.fit(term);

        window.onresize = function () {
            fit.fit(term);
        };

        term.on("data", function (data) {
            term.write(data);
        });
    }
}
