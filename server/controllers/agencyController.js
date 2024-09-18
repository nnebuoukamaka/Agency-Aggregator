const Agency = require('../models/Agency');

exports.createAgency = async (req, res) => {
  const { companyName, companyAddress, companyEmail, numStaff, projects, performanceSummary } = req.body;
  try {
    const agency = new Agency({ companyName, companyAddress, companyEmail, numStaff, projects, performanceSummary });
    await agency.save();
    res.status(201).json(agency);
  } catch (error) {
    res.status(500).json({ msg: 'Server error' });
  }
};

// Update agency details
exports.updateAgency = async (req, res) => {
  const { id } = req.params; // Get agency ID from the request params
  const { companyName, companyAddress, companyEmail, numStaff, projects, performanceSummary } = req.body;

  try {
    // Find the agency by ID and update the provided fields
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
      { new: true, runValidators: true } // Return the updated agency and ensure validators are run
    );

    if (!updatedAgency) {
      return res.status(404).json({ message: 'Agency not found' });
    }

    res.json(updatedAgency);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
