
//////////////////////////////////////////////////
//  HOME
//////////////////////////////////////////////////


export default {

    render() {
        return (
            <div id="content">
                <div class="content-title">HEY</div>
                <div class="content-subtitle">Alors, que faisons-nous aujourd'hui ?</div>

                <div class="buttons-env">
                    <router-link to="/e/add">
                        <img src="/assets/icons/add.png" />
                        <div>Créer</div>
                    </router-link>

                    <router-link to="/e/travail">
                        <img src="/assets/icons/teamwork.jpg" />
                        <div>Travail</div>
                    </router-link>

                    <router-link to="/e/jeux">
                        <img src="/assets/icons/invader.png" />
                        <div>Jeux</div>
                    </router-link>
                </div>

                <div id="credits">
                    BETA 1.0.0
                </div>
            </div>
        );
    }
}
