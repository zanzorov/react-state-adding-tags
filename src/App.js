import { useState } from "react";
import Form from "./Form";
import Tags from "./Tags";

function App() {
  const [blur, setBlur] = useState(false);
  const [textError, setTextError] = useState(
    "Поле ввода не должно быть пустым"
  );
  const [tags, setTags] = useState(["JavaScript","TypeScript","PHP"]);
  
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
    if (tags.some((tag) => tag === newTag)) {
      alert("this tag already exists");
    } else {
      setTags([...tags, newTag]);
    }
    setNewTag("");
  };

  return (
    <div className="app">
      <h2>Добавление тегов</h2>
      <Form
        newTag={newTag}
        handleTag={handleTag}
        handleBlur={handleBlur}
        blur={blur}
        textError={textError}
        addTag={addTag}
      />
      <Tags tags={tags} deleteTag={deleteTag} />
    </div>
  );
}

export default App;
