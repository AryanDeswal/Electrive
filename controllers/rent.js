import Student from '../models/student.js'

export const getVehicle = (req, res) => {
    const vehicleName = req.params.vehicle;
    const imgLocation = "/images/" + vehicleName + ".png";
    res.render('../views/rent', { vehicleName: vehicleName, imgLocation: imgLocation });
};

export const postVehicle = (req, res) => {
    const student = new Student({
        name: req.body.name,
        regd_no: req.body.regd_no,
        roll_no: req.body.roll_no,
        mobile_no: req.body.mobile_no,
        branch: req.body.branch,
        year: req.body.year,
        vehicle: req.params.vehicle
    });

    student.save(function (err) {
        if (err) { console.log(err); }
        else { res.send("<div> <h1> Booked </h1> <a href='/'> Home </a> </div>"); }
    });
}; 