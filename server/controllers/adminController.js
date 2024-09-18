// const User = require('../models/User');
const Agency = require('../models/Agency');

exports.getAllAgencies = async (req, res) => {
  try {
    const agencies = await Agency.find(); // Find all agencies
    res.json(agencies); // Return the list of agencies
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.updateAgencyByAdmin = async (req, res) => {
  const { id } = req.params;
  const { companyName, companyAddress, companyEmail, numStaff, projects, performanceSummary } = req.body;

  try {
    const updatedAgency = await Agency.findByIdAndUpdate(
      id,
      {
        companyName,
        companyAddress,
        companyEmail,
        numStaff,
        projects,
        performanceSummary,
      },
      { new: true, runValidators: true }
    );

    if (!updatedAgency) {
      return res.status(404).json({ message: 'Agency not found' });
    }

    res.json(updatedAgency);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.toggleAgencyStatus = async (req, res) => {
  const { id } = req.params;

  try {
    const agency = await Agency.findById(id);
    if (!agency) {
      return res.status(404).json({ message: 'Agency not found' });
    }

    agency.isActive = !agency.isActive;
    await agency.save();

    res.json({ message: `Agency ${agency.isActive ? 'activated' : 'deactivated'}` });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
