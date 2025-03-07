import React, { useState } from "react";
import { Trash2 } from "lucide-react";

const PaymentSchedule = () => {
  const [stages, setStages] = useState([{ id: 1, name: "", percentage: "" }]);

  // Handle input changes
  const handleChange = (id, field, value) => {
    setStages((prev) =>
      prev.map((stage) =>
        stage.id === id ? { ...stage, [field]: value } : stage
      )
    );
  };

  // Add new stage
  const addStage = () => {
    setStages((prev) => [
      ...prev,
      { id: prev.length + 1, name: "", percentage: "" },
    ]);
  };

  // Remove stage
  const removeStage = (id) => {
    setStages((prev) => prev.filter((stage) => stage.id !== id));
  };

  // Calculate total percentage
  const totalPercentage = stages.reduce(
    (sum, stage) => sum + (parseFloat(stage.percentage) || 0),
    0
  );

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">
        Payment Schedule
      </h2>

      <div className="grid grid-cols-1 gap-4">
        <div className="border p-4 rounded">
          <h3 className="font-medium mb-4">Customizable Payment Schedule</h3>

          <div className="space-y-4">
            {stages.map((stage) => (
              <div key={stage.id} className="flex items-center gap-4">
                <input
                  type="text"
                  placeholder="Stage Name"
                  value={stage.name}
                  onChange={(e) => handleChange(stage.id, "name", e.target.value)}
                  className="flex-1 border-gray-300 focus:border-custom focus:ring-custom !rounded-button"
                  required
                />
                <input
                  type="number"
                  placeholder="Percentage (%)"
                  value={stage.percentage}
                  onChange={(e) => handleChange(stage.id, "percentage", e.target.value)}
                  className="w-32 border-gray-300 focus:border-custom focus:ring-custom !rounded-button"
                  required
                />
                {stages.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeStage(stage.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Total Percentage Warning */}
          <div className="mt-4 text-sm text-gray-600">
            Total Percentage: <span className="font-semibold">{totalPercentage}%</span>
            {totalPercentage > 100 && (
              <span className="text-red-500 ml-2">⚠ Exceeds 100%</span>
            )}
          </div>

          {/* Add Stage Button */}
          <button
            type="button"
            onClick={addStage}
            className="mt-4 bg-custom text-white px-4 py-2 rounded-lg hover:bg-custom/90"
          >
            + Add Stage
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSchedule;
