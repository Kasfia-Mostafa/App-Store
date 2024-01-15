import { useState } from "react";
import InputContainer from "../../../Components/Admin/InputContainer";
import { FaMinus, FaPlus } from "react-icons/fa6";

const NewApps = () => {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [appIcons, setAppIcon] = useState("");
  const [reviews, setReviews] = useState("");
  const [totalReviews, setTotalReviews] = useState("");
  const [Downloads, setDownloads] = useState("");
  const [cover, setCover] = useState("");
  const [banners, setBanners] = useState([]);
  const [description, setDescription] = useState("");

  const bannerHandleChange = (id, value) => {
    console.log(value);
  };

  const handleAddInput = () => {
    const newInput = {
      id: banners.length + 1,
      uri: "",
    };
    setBanners((previousState) => [...previousState, newInput]);
  };

  return (
    <div className="w-full flex flex-col justify-start items-center px-4 py-3 gap-2 ">
      <InputContainer
        placeholder="App Title"
        onChangeText={(data) => setTitle(data)}
      />

      <div className="w-full flex flex-col justify-start items-center p-2 border border-gray-600 border-dashed rounder-md gap-2">
        {banners.map((input) => (
          <div
            className="w-full flex justify-center items-center gap-2"
            key={input.id}
          >
            <input
              className="w-full h-12 rounded-md outline-none border border-third shadow-md bg-secondary px-4 text-lg font-semibold fonts-sans"
              type="text"
              placeholder={"Banner Image"}
              value={input.uri}
              onChange={(e) => bannerHandleChange(input.id, e.target.value)}
            />
            <div className="w-10 h-10 rounded-md flex justify-center items-center bg-red-400" onClick={handleRemoveInput}>
              <FaMinus className="text-textPrimary"></FaMinus>
            </div>
          </div>
        ))}
        <div
          className="w-full flex justify-center items-center cursor-pointer"
          onClick={handleAddInput}
        >
          <FaPlus></FaPlus>
        </div>
      </div>

      <InputContainer
        placeholder="Company name"
        onChangeText={(data) => setCompany(data)}
      />
      <InputContainer
        placeholder="App icon image"
        onChangeText={(data) => setAppIcon(data)}
      />
      <InputContainer
        placeholder="App reviews"
        onChangeText={(data) => setReviews(data)}
      />
      <InputContainer
        placeholder="Total App Reviews"
        onChangeText={(data) => setTotalReviews(data)}
      />
      <InputContainer
        placeholder="Total Downloads"
        onChangeText={(data) => setDownloads(data)}
      />
      <InputContainer
        placeholder="Cover Image"
        onChangeText={(data) => setCover(data)}
      />
      <textarea
        rows="10"
        className="w-full rounded-md outline-none border border-third shadow-md bg-secondary px-4 text-lg font-semibold fonts-sans"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
    </div>
  );
};

export default NewApps;
