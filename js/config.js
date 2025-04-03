const siteConfig = {
  // Personal information
  profile: {
    name: "leonw.ong"
  },
  
  // About section with HTML content support
  about: {
    title: "About",
    content: `
      <p style="padding: 0px 15px; border-left: 2px solid; font-family: 'Times New Roman', serif; font-style: italic; font-size: 20px;">
        “Men must live and create. Live to the point of tears.” – Albert Camus
      </p>
      <p>
        Hello there, and welcome! I'm Leon / Lok, a curious soul who finds joy in exploring every corner of the web. I'm not a designer or developer, I just love creating and tinkering digital / physical things.
      </p>
      <p>
        This is my personal space, not much going on here, but still feel free to wander through and poke around. Every visit inspires me, and I hope you feel just as welcomed here.
      </p>
      <p>
        There are <span class="tinylytics_hits">00</span> views on this page so far, and you can click the button below to send some positive vibes my way. <button class="tinylytics_kudos">👋00</button>
      </p>
    `
  },
  
  // Button configurations
  buttons: [
    {
      id: "lok",
      label: "@lok",
      type: "links",
      title: "@lok",
      links: [
        { text: "are.na", url: "https://are.na/lok" },
        { text: "omg.lol", url: "https://omg.lol/lok" },
        { text: "sourcehut", url: "https://sr.ht/~lok" },
        { text: "special.fish", url: "https://special.fish/lok" },
        { text: "neodb", url: "https://neodb.social/users/lok" },
        { text: "signal", url: "https://signal.me/#eu/8Q-JFgLhjGbsPSfgMHep65NmUJNKxTr1uyO-arsGq6AUf2ZaxrtPHY4WLiLrwm9D"}
      ]
    },
    {
      id: "l3on",
      label: "@l3on_y2k",
      type: "links",
      title: "@l3on_y2k",
      links: [
        { text: "instagram", url: "https://instagram.com/l3on_y2k" },
        { text: "twitter", url: "https://twitter.com/l3on_y2k" },
        { text: "reddit", url: "https://reddit.com/user/l3on_y2k" },
        { text: "telegram", url: "https://t.me/l3on_y2k" }
      ]
    },
    {
      id: "mail",
      label: "mail",
      type: "iframe",
      title: "Mail",
      iframe: {
        src: "https://letterbird.co/lok",
        width: "100%"
        // Height is now controlled by CSS
      }
    },
    {
      id: "whiteboard",
      label: "whiteboard",
      type: "iframe",
      title: "Whiteboard",
      iframe: {
        src: "https://kinopio.club/embed/?spaceId=WxFUq5kPNkJ0gFgapKSGk&zoom=69",
        width: "100%"
        // Height is now controlled by CSS
      }
    }
  ]
};
