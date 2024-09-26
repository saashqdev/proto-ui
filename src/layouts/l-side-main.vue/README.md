<!-- This README.md is automatically generated based on api.yaml and docs/*.md for easy reference on GitHub and NPM. If you need to modify it, please view the source file -->

# LSideMain Left Column Fixed Layout

## Example
A generic layout with only a fixed left sidebar.

Can be used with LPage. Because routing distribution is sometimes required, the top-level page uses LPage, and the sub-pages can use this component layout or other component layouts.

The scrolling area is set globally, and the content will adapt to the window. (The following example does not show the scrolling effect temporarily)

### Basic usage

``` html
<div style="position: relative; z-index: 1; height: 500px; overflow: hidden;">
    <l-side-main demo>
        <u-sidebar slot="side">
            <u-sidebar-item>Overview</u-sidebar-item>
            <u-sidebar-group title="List Page">
                <u-sidebar-item>Basic List</u-sidebar-item>
                <u-sidebar-item>Search List</u-sidebar-item>
            </u-sidebar-group>
            <u-sidebar-group title="Form Page">
                <u-sidebar-item>Basic Form</u-sidebar-item>
                <u-sidebar-item>Step Form</u-sidebar-item>
            </u-sidebar-group>
            <u-sidebar-group title="Personal Page">
                <u-sidebar-item>Personal Information</u-sidebar-item>
            </u-sidebar-group>
        </u-sidebar>
        <u-linear-layout direction="vertical">
            <u-crumb>
                <u-crumb-item to="/">Homepage</u-crumb-item>
                <u-crumb-item to="/proto-ui">Prototype Component</u-crumb-item>
                <u-crumb-item disabled>Navigation</u-crumb-item>
                <u-crumb-item to="/proto-ui/u-crumb" current>Breadcrumbs</u-crumb-item>
            </u-crumb>
            <!--router-view></router-view-->
            <u-article>
                <h1>Preface to the Red Cliff</h1>
                <p>Su Shi 1082 AD</p>
                <p>In the autumn of the year Renxu, on the 15th day of the seventh month, Su Zi and his guests went boating under the Red Cliff. The breeze was gentle and the water was still. He raised his cup to his guests, recited poems about the bright moon, and sang songs about graceful women. After a while, the moon rose above the eastern hills and hovered between the Big Dipper and the Ox. White dew fell across the river, and the water shone to the sky. Even if you are as small as a reed, you can soar above the vast expanse of water. It is as vast as riding the wind in the sky, and you don’t know where it will stop; it is as light as being isolated from the world and ascending to heaven. </p>
                <p>So they drank and enjoyed themselves, knocking on the side of the boat and singing. The song goes: "I paddle with cinnamon and orchid oars, and paddle against the clear sky and follow the flowing light. My heart is so far away, and I look forward to the beauty in the sky." There was a guest who played the flute, and he sang along with the song. The sound was sobbing, like resentment, like longing, like crying, and the lingering sound was like a thread. It was like a dancing dragon in a deep valley, and a weeping widow in a lonely boat.</p>
                <p>Su Zi was gloomy, sitting upright, and asked the guest, "Why is it so?" The guest said, "'The moon is bright and the stars are sparse, the magpies fly south.' Isn't this the poem of Cao Mengde? Looking west to Xiakou, east to Wuchang. Mountains and rivers intersect, and the sky is vast. Isn't this the poem of Mengde trapped by Zhou Lang? When he broke through Jingzhou, went down to Jiangling, and went east along the river, his ships were thousands of miles long, his flags covered the sky, he drank wine by the river, held his spear and wrote poems, he was a hero of the time, but where is he now? What's more, I and you fish and chop wood on the river bank, we are friends with fish and shrimps and elk, we drive a small boat, and raise gourds to toast each other. We are like mayflies in the universe, a grain of sand in the vast ocean. We mourn the brevity of our lives and envy the infinity of the Yangtze River. We travel with the flying fairy and embrace the bright moon to live forever. We know that we can't get it all at once, so we entrust our echoes to the sad wind."</p>
                <p>Su Zi said: "Do you also know water and the moon? The passing is like this, yet it has never gone; the waxing and waning is like that, yet it never grows or wanes. If we look at it from the perspective of change, then the heaven and earth cannot even last a moment; if we look at it from the perspective of the unchanging, then things and I are both endless, so why envy? Moreover, between heaven and earth, everything has its owner. If it is not mine, I will not take even a tiny bit of it. Only the fresh breeze on the river and the bright moon in the mountains, when I hear them, they become sound, when I see them, they become color. There is no restriction on taking them, and they are inexhaustible when I use them. They are the endless treasure of the Creator, and they are what you and I enjoy together."</p>
                <p>The guests were delighted and laughed, washing their cups and drinking more. The food and kernels were all gone, and the cups and plates were in a mess. They lay together in the boat, not realizing that the east was already bright. </p>
            </u-article>
        </u-linear-layout>
    </l-side-main>
</div>
```

### Using with LPage

``` html
<div style="position: relative; z-index: 1; height: 500px; overflow: hidden;">
    <l-page demo>
        <u-navbar slot="head">
            <u-logo slot="left" style="margin-left: -20px;">Demo</u-logo>
            <u-navbar-item href="/">Homepage</u-navbar-item>
            <u-navbar-item href="https://kubevue.github.io" target="_blank">Kubevue</u-navbar-item>
            <u-navbar-item href="https://github.com/saashqdev/cloud-ui" target="_blank">Component Library</u-navbar-item>
            <div slot="right">
                <u-navbar-dropdown style="width: 100px; margin-right: 10px;">
                    <div slot="title">User</div>
                    <in-navbar-menu>
                        <u-navbar-menu-item to="/account/info">Personal Information</u-navbar-menu-item>
                        <u-navbar-menu-item>Logout</u-navbar-menu-item>
                    </u-navbar-menu>
                </u-navbar-dropdown>
            </div>
        </u-navbar>
        <l-side-main demo>
            <u-sidebar slot="side">
                <u-sidebar-item>Overview</u-sidebar-item>
                <u-sidebar-group title="List Page">
                    <u-sidebar-item>Basic List</u-sidebar-item>
                    <u-sidebar-item>Search List</u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="Form Page">
                    <u-sidebar-item>Basic Form</u-sidebar-item>
                    <u-sidebar-item>Step Form</u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="Personal Page">
                    <u-sidebar-item>Personal Information</u-sidebar-item>
                </u-sidebar-group>
            </u-sidebar>
            <u-linear-layout direction="vertical">
                <u-crumb>
                    <u-crumb-item to="/">Home</u-crumb-item>
                    <u-crumb-item to="/proto-ui">Prototype Component</u-crumb-item>
                    <u-crumb-item disabled>Navigation</u-crumb-item>
                    <u-crumb-item to="/proto-ui/u-crumb" current>Breadcrumbs</u-crumb-item>
                </u-crumb>
                <!--router-view></router-view-->
                <u-article>
                    <h1>Preface to the Red Cliff</h1>
                    <p>Su Shi 1082 AD</p>
                    <p>In the autumn of the year Renxu, on the 15th day of the seventh month, Su Zi and his guests went boating under the Red Cliff. The breeze was gentle and the water was still. He raised his cup to his guests, recited poems about the bright moon, and sang songs about graceful women. After a while, the moon rose above the eastern hills and hovered between the Big Dipper and the Ox. White dew fell across the river, and the water shone to the sky. Even if you are as small as a reed, you can soar above the vast expanse of water. It is as vast as riding the wind in the sky, and you don’t know where it will stop; it is as light as being isolated from the world and ascending to heaven. </p>
                    <p>So they drank and enjoyed themselves, knocking on the side of the boat and singing. The song goes: "I paddle with cinnamon and orchid oars, and paddle against the clear sky and follow the flowing light. My heart is so far away, and I look forward to the beauty in the sky." There was a guest who played the flute, and he sang along with the song. The sound was sobbing, like resentment, like longing, like crying, and the lingering sound was like a thread. It was like a dancing dragon in a deep valley, and a weeping widow in a lonely boat.</p>
                    <p>Su Zi was gloomy, sitting upright, and asked the guest, "Why is it so?" The guest said, "'The moon is bright and the stars are sparse, the magpies fly south.' Isn't this the poem of Cao Mengde? Looking west to Xiakou, east to Wuchang. Mountains and rivers intersect, and the sky is vast. Isn't this the poem of Mengde trapped by Zhou Lang? When he broke through Jingzhou, went down to Jiangling, and went east along the river, his ships were thousands of miles long, his flags covered the sky, he drank wine by the river, held his spear and wrote poems, he was a hero of the time, but where is he now? What's more, I and you fish and chop wood on the river bank, we are friends with fish and shrimps and elk, we drive a small boat, and raise gourds to toast each other. We are like mayflies in the universe, a grain of sand in the vast ocean. We mourn the brevity of our lives and envy the infinity of the Yangtze River. We travel with the flying fairy and embrace the bright moon to live forever. We know that we can't get it all at once, so we entrust our echoes to the sad wind."</p>
                    <p>Su Zi said: "Do you also know water and the moon? The passing is like this, yet it has never gone; the waxing and waning is like that, yet it never grows or wanes. If we look at it from the perspective of change, then the heaven and earth cannot even last a moment; if we look at it from the perspective of the unchanging, then things and I are both endless, so why envy? Moreover, between heaven and earth, everything has its owner. If it is not mine, I will not take even a tiny bit of it. Only the fresh breeze on the river and the bright moon in the mountains, when I hear them, they become sound, when I see them, they become color. There is no restriction on taking them, and they are inexhaustible when I use them. They are the endless treasure of the Creator, and they are what you and I enjoy together."</p>
                    <p>The guests were delighted and laughed, washing their cups and drinking more. The food and kernels were all gone, and the cups and plates were in a mess. They lay together in the boat, not realizing that the east was already bright. </p>
                </u-article>
            </u-linear-layout>
        </l-side-main>
    </l-page>
</div>
```

## API
### Slots

#### (default)

Main content area.

#### Side

Set the left column content.

#### Main

Reset the middle area content. Wrap outside the main content area.