import Student from '../models/studentModel.js'

export const getVehicle = (req, res) => {
    const vehicleName = req.params.vehicle;
    const imgLocation = "/images/" + vehicleName + ".png";
    res.render('../views/rent', { vehicleName: vehicleName, imgLocation: imgLocation });
};

export const postVehicle = (req, res) => {
    const { name, regd_no, roll_no, mobile_no, branch, year } = req.body;
    const { vehicle } = req.params;

    const student = new Student({ name: name, regd_no, roll_no, mobile_no, branch, year, vehicle });

    student.save(function (err) {
        if (err) { console.log(err); }
        else { res.send("<div> <h1> Booked </h1> <a href='/'> Home </a> </div>"); }
    });
}; 