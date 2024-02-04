import NewApps from "./Apps/NewApps";
import ListOfApps from "./ListOfApps/ListOfApps";

const AdminApps = () => {
  return (
    <div className="w-full grid grid-cols-2 lg:grid-cols-2">
      {/* left section */}
      <NewApps></NewApps>
      {/* right section */}
      <ListOfApps></ListOfApps>
    </div>
  );
};

export default AdminApps;
