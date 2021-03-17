import React, { useState } from 'react';
import {Namecard} from "./components/Namecard";

export function MainComponent() {

    const [renderNameCard, setRenderNameCard] = useState(false);

        return (
            <div className={"container"}>
                <button className={"btn-grad"} onClick={() => setRenderNameCard(true)}>Generate</button>
                <Namecard render={renderNameCard} />
            </div>
        )
}

