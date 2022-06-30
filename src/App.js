import { useState } from "react";
import Form from "./Form";
import Tags from "./Tags";


function App() {
  //const [text, setText] = useState("");
  const [blur, setBlur] = useState(false);
  const [textError, setTextError] = useState(
    "Поле ввода не должно быть пустым"
  );
  const [tags, setTags] = useState([
    {
      text: "JavaScript",
      diff: "easy",
    },
    {
      text: "TypeScript",
      diff: "easy",
    },
    {
      text: "PHP",
      diff: "easy",
    },
  ]);
  const [newTag, setNewTag] = useState("");

  const handleTag = (e) => {
    setNewTag(e.target.value);
    if (!e.target.value) {
      setTextError("Поле ввода не должно быть пустым");
    } else {
      setTextError("");
    }
  };

  const handleBlur = () => {
    setBlur(true);
  };

  const deleteTag = (indexOfremovingItem) => {
    const filtered = tags.filter((tag, index) => {
      if (index === indexOfremovingItem) {
        return false;
      }
      return true;
    });
    setTags(filtered);
  };

  const addTag = () => {
    if (newTag === "") {
      alert("type something");
    } else if (tags.some((tag) => tag.text === newTag)) {
      alert("this tag already exists");
    } else {
      setTags([...tags, { text: newTag, diff: "easy" }]);
    }
    setNewTag("");
  };

  return (
    <div className="app">
      <h2>Добавление тегов</h2>
      <Form
        newTag={newTag}
        handleTag={handleTag}
        addTag={addTag}
        handleBlur={handleBlur}
        blur={blur}
        textError={textError}
        tags={tags}
      />
      <Tags tags={tags} deleteTag={deleteTag} />
    </div>
  );
}

export default App;
