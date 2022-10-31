introduction:This is a crypto tracking website,this website include 3 features:  
1.update real-time crypto price and 24hours price change. 
2.this website also allow user to add their favorite crypto to own list and delete any coin which they want.
3.this website allow user to choose currency type to match crypto price
![crypto1](https://user-images.githubusercontent.com/94621435/199002381-ec910167-1a55-4fd2-8a0f-b5fa86e1ba04.PNG)

out scope: the project haven't realized the crypto analysis function form the project proposal

this project use React. Hook router , tailwind CSS , and Redux toolkit. I also use daisy ui API to create 3 button
the crypto api is from coingecko api.

layout rationale: this is a responsive design website. I use the tailwind CSS because tailwind CSS can write CSS keywords in the react file and it can simplify the key word. I can save some time by using tailwind CSS. I use grid and flex layout to make the webs become responsive.

data rationale: This project use redux toolkit to manage all the data. I use redux because the react component like a tree structure , passing data need to layer by layer that is very complex in trdational appliction.redux can provide centralized data management. redux tookit can simplify writing of redux. The project use 2 redux reducer that one reducer is manage the crypto data and currency. when user click one of the button ![crypto2](https://user-images.githubusercontent.com/94621435/199003776-8c80d58a-cfdd-4368-b282-d6a2abc7a954.PNG) it will send user slection to this reducer then the fetch url will change and get same type of currency with user selection.![image](https://user-images.githubusercontent.com/94621435/199007793-7b01f86a-d704-41e8-b7a3-e0fc1e93e22e.png)

In order to keep the accuracy of data, This project send the get request every 3 second but this is a free api and the api usually update about evry 30 second  ![crypto](https://user-images.githubusercontent.com/94621435/199007228-87e1c51e-8899-44e2-abce-54569a59f541.PNG).) because it project is send the get request every 3 second, it may take a few seconds after users choose a currency.
17
the second reducer is to handle the favorite list data. this reducer can handle users to add and delete functions on the home page and delete functions on the favorite list page.

learned from the project: I learned about the redux toolkit from the project this is a very powerful and useful tool. when I write the project, I got a lot of bugs. this project helps me to improve my problem-solving skills. I also realized the importance of JavaScript because there are many javascript functions that need to be used in react projects




