# Bedder Together
A pun on playing minecraft is better together for bedrock.
I mainly made this because I wanted to become a better developer

## TO-DO
-Servers
--Add Servers (Favorite)                                                B
--Server list (featured?)                                               B

-Connecting
--Connect to server from phone                                          A
--Share port on network from phone                                      A
--Auto connect features for servers (Icon, text, player count)          B

<!-- Notes to do for Servers and Connecting -->

AddServer, EditServer modals:
-need a context and hooks for editing, adding, deleting servers
-Need to make sure that Name, Ip, Port all have values

Server Context and Hooks:
-When app starts up get information for certain items like server pack.png, MOTD, playercount, and ping

ProxyModal:
-First need modal that shows up asking player to setup connection for {server}
-When proceeding need to set up a context and hooks that set up proxy
    -Can only close the modal when ending the proxy, as to only have one proxy at a time

Proxy:
-Close proxy 15 minutes after not being used, if app is in background state, need more research on this honestly
-Show notification card for proxy?





-UI                                                                     B
--I think UI should be done like the server-ui.png. Make it bedrock themed,
   should include (Search server, refres, new server button)
--details to have (Server name, splash text, ping, playercount, icon) and operations (delete, edit, join)
---*Note join can be done by icon or just touching on it*

-Monetize                                                               C
--Phase 1:
---No monetization, if the app is still owned for over a week, ask for a review
--Phase 2:
---After a couple months set up one time payment of 3.99
---Can share with one friend for a month
--Phase 3:
---Not set in stone, but potentially easily accessible server hosting for people
----would need to inculde the following (payments, server management, card details) - will probably need to redirect to 
    a website though for this to avoid having to give apple commission

-Analytics Corresponds with monetization
--Phase 1:
---Probably don't really need this for now, and will probably mainly just use app store data. Can store analytics I want to track in the future in the app state.
--Phase 2:
---Will need to research and look into this, basically we want to capture certain analytics if apple doesn't do it for us
--Phase 3:
---yeah... more research needed, partner?



