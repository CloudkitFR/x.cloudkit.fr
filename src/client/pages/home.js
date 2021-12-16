import Loading          from "../components/loading";
import Environments     from "../components/environments";
import Terminal         from "../components/terminal";


//////////////////////////////////////////////////
//  HOME
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
                <Environments />
            </>
        );
    },

    created() {
        window.onclick      = () => {
            window.onclick  = null;
            this.state      = 1;
        };
    }
}
