

const Filter = () => {
    return (
            <div className="modal-box">
                  <h3 className="font-bold text-lg text-center">Filters</h3>
                  <hr />
                  <div>
                    <h2 className="font-semibold text-xl mt-5 mb-1">Type of place</h2>
                    <p>Search rooms, entire homes, or any type of place.</p>
                    <div className="m-4 grid grid-cols-3">
                    <button className="btn btn-outline h-14">Any Type</button>
                    <button className="btn btn-outline h-14"> Room</button>
                    <button className="btn btn-outline h-14">Entire home</button>
                    </div>
                    <hr />
                  </div>
                  <div>
                    <h2 className="font-semibold text-xl mt-5 mb-1">Price range</h2>
                    <p>Nightly prices before fees and taxes</p>
                  </div>
                  <div className="modal-action">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn">Close</button>
                    </form>
                  </div>
            </div>
    );
};

export default Filter;