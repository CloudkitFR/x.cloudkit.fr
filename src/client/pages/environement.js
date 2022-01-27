
//////////////////////////////////////////////////
//  ENVIRONEMENT
//////////////////////////////////////////////////


export default {

    render() {
        let env = this.$route.params.env;

        return (
            <div id="content">
                <div class="content-title">HEY</div>
                <div class="content-subtitle">Alors, que faisons-nous aujourd'hui ?</div>

                <div class="buttons-env">
                    <router-link to="/">
                        <img src="/assets/icons/back.png" />
                        <div>Retour</div>
                    </router-link>

                    <router-link to="#">
                        <img src="/assets/icons/appstore.png" />
                        <div>Apps Store</div>
                    </router-link>

                    <router-link to={`/e/${env}/term`}>
                        <img src="/assets/icons/terminal.jfif" />
                        <div>Terminal</div>
                    </router-link>

                    <router-link to={`/e/${env}/calc`}>
                        <img src="/assets/icons/calculator.png" />
                        <div>Calculatrice</div>
                    </router-link>
                </div>

                <div id="credits">
                    BETA 1.0.0
                </div>
            </div>
        );
    }
}
