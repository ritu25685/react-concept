import "./App.css"
import NavBar from "./components/NavBar/NavBar"
import Cards from "./components/Cards/Cards"
import "semantic-ui-css/semantic.min.css"
import {  useContext, useEffect, useReducer } from "react"
import { Grid } from "semantic-ui-react"
import Login from "./components/Login/Login"
import ThemeContext from "./context/ThemeContext"
const initalState = {
fruitObject:[],
carts: [],
isDarkTheme: false,
}
const reducer = (state, action) => {
switch (action.type) {
  case "ADD_TO_CART": {
    let updatedValue = state.fruitObjects.map((value, index) =>
      index === action.value ? { ...value, quantity: value.quantity + 1 } : { ...value }
    )
    return {
      ...state,
      fruitObjects: updatedValue,
      carts: [...state.carts, action.value],
    }
  }

  case "SET_LIST": {
    state = {
      ...state,
      fruitObjects: action.value,
    }
    return state
  }
  case "TOGGLE_DARK_THEME": {
    state = {
      ...state,
      isDarkTheme: !state.isDarkTheme,
    }
    return state
  }
  default:
    return state
}
}

 
const App = () => {
  const [state, dispatch] = useReducer(reducer, initalState)
  setTimeout(() => {
    dispatch({
      type: "SET_LIST",
      value: [
        {
          name: "Apple",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/265px-Red_Apples.jpg",
          price: 35,
          isLiked: false,
          quantity: 0,
        },
        {
          name: "Banana",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Bananas_white_background_DS.jpg/320px-Bananas_white_background_DS.jpg",
          price: 12,
          isLiked: false,
          quantity: 0,
        },
        {
          name: "Grapes",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Table_grapes_on_white.jpg/320px-Table_grapes_on_white.jpg",
          weight: 0.1,
          price: 45,
          isLiked: false,
          quantity: 0,
        },
        {
          name: "Pineapple",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Pineapple_and_cross_section.jpg/286px-Pineapple_and_cross_section.jpg",
          price: 200,
          isLiked: false,
          quantity: 0,
        },
        {
          name: "Apple",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/265px-Red_Apples.jpg",
          price: 35,
          isLiked: true,
          quantity: 0,
        },
        {
          name: "Banana",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Bananas_white_background_DS.jpg/320px-Bananas_white_background_DS.jpg",
          price: 12,
          isLiked: false,
          quantity: 0,
        },
        {
          name: "Grapes",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Table_grapes_on_white.jpg/320px-Table_grapes_on_white.jpg",
          weight: 0.1,
          price: 45,
          isLiked: false,
          quantity: 0,
        },
        {
          name: "Pineapple",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Pineapple_and_cross_section.jpg/286px-Pineapple_and_cross_section.jpg",
          price: 200,
          isLiked: false,
          quantity: 0,
        },
        {
          name: "Apple",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/265px-Red_Apples.jpg",
          price: 35,
          isLiked: false,
          quantity: 0,
        },
        {
          name: "Banana",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Bananas_white_background_DS.jpg/320px-Bananas_white_background_DS.jpg",
          price: 12,
          isLiked: false,
          quantity: 0,
        },
        {
          name: "Grapes",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Table_grapes_on_white.jpg/320px-Table_grapes_on_white.jpg",
          weight: 0.1,
          price: 45,
          isLiked: false,
          quantity: 0,
        },
        {
          name: "Pineapple",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Pineapple_and_cross_section.jpg/286px-Pineapple_and_cross_section.jpg",
          price: 200,
          isLiked: false,
          quantity: 0,
        },
      ],
    })
  }, 2000)
  return (
    <ThemeContext.Provider value={state.isDarkTheme}>
      {/* <Login></Login> */}
      <Grid
        style={
          state.isDarkTheme
            ? { backgroundColor: "#282C34" }
            : { backgroundColor: "#f2f2f2" }
        }
      >
        <Grid.Row>
          <Grid.Column>
            <NavBar
              carts={state.carts}
              toggleDarkTheme={() => {
                dispatch({ type: "TOGGLE_DARK_THEME", value: !state.isDarkTheme })
              }}
            ></NavBar>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row></Grid.Row>
        <Grid.Row></Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Cards
              list={state.fruitObjects}
              addItemToCart={listIndex => {
                dispatch({ type: "ADD_TO_CART", value: listIndex })
              }}
            ></Cards>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </ThemeContext.Provider>
    
    
  )
}
export default App