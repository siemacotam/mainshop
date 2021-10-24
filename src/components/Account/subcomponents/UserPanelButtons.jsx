const UserPanelButtons = (fn, info) => {
  return (
    <div className="col-sm-3 p-2">
      <button className="btn btn-primary  w-100 h-100" onClick={fn}>
        {info}
      </button>
    </div>
  );
};

export default UserPanelButtons;
