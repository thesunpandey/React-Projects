import { PureComponent } from "react";
import Header from "./components/Header.jsx";
import SearchBar from "./components/SearchBar.jsx";
import EmojiResults from "./components/EmojiResults.jsx";
import Filter from "./components/Filter.jsx";
export default class App extends PureComponent {
  state = {
    filteredEmojis: Filter("", 20),
  };

  handleChange = (event) => {
    this.setState({
      filteredEmojis: Filter(event.target.value, 15),
    });
  };

  render() {
    return (
      <div>
        <Header />
        <SearchBar handleChange={this.handleChange} />
        <EmojiResults emojiData={this.state.filteredEmojis} />
      </div>
    );
  }
}