import Loading  from "../components/loading";
import Terminal from "../components/terminal";


//////////////////////////////////////////////////
//  TERMINAL
//////////////////////////////////////////////////


export default {

    data() {
        return {
            state: 0
        };
    },

    methods: {
        onReady() {
            this.state = 1;
        },

        onClose() {
            this.$router.replace(`/e/${this.$route.params.env}`);
        }
    },

    render() {
        return (
            <>
                <Loading style={{
                    opacity         : this.state ? 0            :  1,
                    transform       : this.state ? "scale(1.1)" : "",
                    pointerEvents   : this.state ? "none"       : "",
                }} />

                <Terminal onready={this.onReady} onclose={this.onClose} />
            </>
        );
    }
}
