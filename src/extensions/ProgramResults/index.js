import React from "react";
import { TextInput, NumberInput } from "@strapi/design-system";

const ProgramResults = ({ name, onChange, value }) => {
  const labels = {
    volunteersParticipated: "Số tình nguyện viên tham gia",
    beneficiaries: "Số người được hỗ trợ",
    fundsRaised: "Số tiền quyên góp",
    giftsDistributed: "Số phần quà đã phát",
    mealsServed: "Số suất ăn đã phục vụ",
    scholarshipsAwarded: "Số suất học bổng",
    scholarshipAmount: "Giá trị mỗi suất học bổng",
    attendees: "Số người tham dự",
  };

  const isStringField = ["fundsRaised", "scholarshipAmount"].includes(name);

  return isStringField ? (
    <TextInput
      label={labels[name]}
      name={name}
      onChange={(e) => onChange({ target: { name, value: e.target.value } })}
      value={value || ""}
    />
  ) : (
    <NumberInput
      label={labels[name]}
      name={name}
      onChange={(e) => onChange({ target: { name, value: e.target.value } })}
      value={value || 0}
      min={0}
    />
  );
};

export default ProgramResults;
