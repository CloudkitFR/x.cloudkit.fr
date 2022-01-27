import Loading from "../components/loading";


//////////////////////////////////////////////////
//  CALCULATOR
//////////////////////////////////////////////////


export default {

    data() {
        return {
            state: 0
        };
    },

    render() {
        return (
            <>
                <Loading style={{
                    opacity         : this.state ? 0            :  1,
                    transform       : this.state ? "scale(1.1)" : "",
                    pointerEvents   : this.state ? "none"       : "",
                }} />

                <video src="/assets/calculator.mp4" ref="video" />
            </>
        );
    },

    mounted() {
        const video = this.$refs.video;
        const self  = this;

        // LOOP
        video.onended = function() {
            video.play();
        };

        // ON LOAD
        video.oncanplay = function () {

            // Bak home.
            window.onclick      = function () {
                window.onclick  = null;
                self.$router.replace(`/e/${self.$route.params.env}`);
            };

            // Hide loading and play.
            self.state = 1;
            video.play();
        };
    },

    unmounted() {
        window.onclick = null;
    }
}
