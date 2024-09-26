<!-- The README.md is automatically generated based on api.yaml and docs/*.md for easy viewing on GitHub and NPM. If you need to modify, please view the source file -->

# LDocument Document Layout

The top bar and left bar are fixed layouts in common document websites, such as this document page.

## Example
The scrolling area is set globally, and the content will adapt to the window. (The following Example does not display the scrolling effect for the time being)

``` html
<div style="position: relative; z-index: 1; height: 500px; overflow: hidden;">
    <l-document demo>
        <u-navbar slot="head">
            <u-logo slot="left">Demo</u-logo>
            <u-navbar-item href="/">Homepage</u-navbar-item>
            <u-navbar-item href="https://kubevue.github.io" target="_blank">kubevue</u-navbar-item>
            <u-navbar-item href="https://github.com/saashqdev/cloud-ui" target="_blank">Components Library</u-navbar-item>
            <u-navbar-item href="https://github.com/saashqdev-templates/admin-cloud-fs" target="_blank">GitHub</u-navbar-item>
            <div slot="right">
                <u-navbar-dropdown style="width: 100px; margin-right: 10px;">
                    <div slot="title">User</div>
                    <u-navbar-menu>
                        <u-navbar-menu-item to="/account/info">Personal Information</u-navbar-menu-item>
                        <u-navbar-menu-item>Logout</u-navbar-menu-item>
                    </u-navbar-menu>
                </u-navbar-dropdown>
            </div>
        </u-navbar>
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
                <h1>Former Chibi Fu</h1>
                <p>Su Shi 1082 AD</p>
                <p>In the autumn of Renxu, in the seventh month, Su Zi and his guests went boating under Red Cliff. The breeze comes slowly and the water waves are calm. Lifting wine to the guests, reciting poems about the bright moon and singing graceful chapters. After a while, the moon rose above the east mountain, wandering among the bullfights. White dew flows across the river, and the water reaches the sky. Even though a reed is like this, thousands of hectares are at a loss. The vastness is as if Feng Xu is riding the wind without knowing where it stops; the flutteringness is as if he is left alone in the world, becoming an immortal and ascending to immortality. </p>
                <p>Then he drank and enjoyed himself very much, and he buckled the boat and sang. The song goes: "The osmanthus sticks are covered with orchid oars, hitting the sky is bright and tracing the stream of light. It is dim and vague, and I look forward to the beauty in the sky." There is a guest who plays the cave flute, and he sings along with it. His voice was whining, like resentment and admiration, like weeping and complaining, and the lingering sound was lingering like a wisp. The lurking dragon dances in the secluded ravine, and the concubine weeps in the lonely boat. </p>
                <p>Su Zi was stunned, sitting upright, and asked the guest: "Why is this so?" The guest said: "'The moon and stars are sparse, and the black magpie flies south.' Is this not a poem by Cao Mengde? Looking west to Xiakou, Looking east to Wuchang, the mountains and rivers are looming, and the sky is green. Isn't this what Meng De was trapped in Zhou Lang? , Hengshu wrote poems, and he was a hero for a lifetime. How are they now? Kuangwu and his son fished and wooded on the river, accompanied by fish and shrimps, and friends with elk. They rode a small boat and sent mayflies to each other. In the sky and the earth, I feel sorry for my life for a moment, and I admire the infiniteness of the Yangtze River. I carry the flying immortals to swim, and I don’t know that I will be there suddenly, and I will leave it in the sad wind."</p>
                <p>Su Zi said: "You also know that the water is like the moon? Those who have passed away are like this, but they have not yet gone; those who are full and empty are like that, but their soldiers are not waxing and waning. If you look at the changes in Gaijiang, then the world will be like this. It cannot be seen in a moment; from the perspective of being unchanging, things and I are endless, and how can I envy it! In heaven and earth, everything has its own owner, even if it is not my own, I can't take any of it. But the cool breeze on the river and the bright moon in the mountains can be heard by the ears and become sounds, and the eyes can see them and form colors. They can be taken without restraint and used inexhaustibly. They are the endless treasures of the Creator, and I and my son are in harmony with each other. ”</p>
                <p>The guests are happy and smile, wash their cups and drink more. The core of the food is gone, and the cups and plates are in a mess. The couple and their pillows were spread out in the boat, not knowing how white the east was. </p>
            </u-article>
        </u-linear-layout>
    </l-document>
</div>
```

## API
### Slots

#### (default)

Main content area.

#### Head

Set top content.

#### Side

Set the left column content.

#### Main

Reset the middle area content. Wrapped outside the main content area.
