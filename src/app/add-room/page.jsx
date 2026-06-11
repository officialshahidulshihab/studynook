import Form from "@/Components/Form";

const AddRoom = () => {
  return (
    <div className="bg-[#0d1e1a]">
      <div className="max-w-275 mx-auto pb-10">
        <div className="space-y-3 pt-10">
          <h1 className="text-[#c9a84c] font-plus_jakarta">List a Space</h1>
          <h2 className="text-[#f0ebe0] text-3xl">Add a Room</h2>
          <p className="text-[#527c74] font-plus_jakarta">
            Fill in the details below to list your study room.
          </p>
        </div>
        <Form></Form>
      </div>
    </div>
  );
};

export default AddRoom;
