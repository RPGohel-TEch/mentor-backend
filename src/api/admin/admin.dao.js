const Admin = require("./admin.model");

const buildSaveadminJson = (props) => {
  const json = {};
  json.first_name = props.first_name;
  json.last_name = props.last_name || null;
  json.mobile = props.mobile || null;
  json.email = props.email;
  json.password = props.password;
  return json;
};

module.exports.checkAdminExist = async (email) => {
  try {
    const admin = await Admin.findOne({ email });
    return admin;
  } catch (error) {
    throw error;
  }
};

module.exports.getAdmin = async () => {
  try {
    const admin = Admin.find()
      .select("first_name last_name mobile email password")
      .lean();
    return admin;
  } catch (error) {
    throw error;
  }
};

module.exports.getAdminById = async (id) => {
  try {
    const admin = Admin.findOne({ _id: id })
      .select("first_name last_name mobile email password")
      .lean();
    return admin;
  } catch (error) {
    throw error;
  }
};

module.exports.addAdmin = (adminDetail) => {
  try {
    const admin = new Admin(buildSaveadminJson(adminDetail));
    const result = admin.save();
    return result;
  } catch (error) {
    throw error;
  }
};

module.exports.editAdmin = async (adminId, params) => {
  try {
    const admin = await Admin.findOneAndUpdate({ _id: adminId }, params, {
      new: true,
    });
    return admin;
  } catch (error) {
    throw error;
  }
};

module.exports.deleteAdmin = async (adminId) => {
  try {
    const admin = await Admin.findOneAndDelete({ _id: adminId });
    return admin;
  } catch (error) {
    throw error;
  }
};
