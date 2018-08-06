import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Button, Welcome } from "@storybook/react/demo";

import { Cover } from "../components/Cover";

storiesOf("Cover", module)
    .add("with text, image & gradient", () => (
        <Cover
            Title="Your Discover Weekly"
            Background="https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-9/32202716_1859452000753090_2861413586050220032_o.jpg?_nc_cat=0&oh=be5cbfaa2fe06971de646803f67d6c75&oe=5BC7AC8E"
            StartColor="rgba(255, 0, 0, 0.7)"
            EndColor="rgba(0, 0, 255, 0.4)"
        />
    ))
    .add("With text & image", () => (
        <Cover
            Title="Your Summer Rewind"
            Background="https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-9/32202716_1859452000753090_2861413586050220032_o.jpg?_nc_cat=0&oh=be5cbfaa2fe06971de646803f67d6c75&oe=5BC7AC8E"
        />
    ));
