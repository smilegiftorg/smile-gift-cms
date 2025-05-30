import React from "react";
import { TextInput, NumberInput } from "@strapi/design-system";
import { useIntl } from "react-intl";

const ProgramResults = ({ name, onChange, value }) => {
  const { formatMessage } = useIntl();

  const labels = {
    volunteersParticipated: {
      id: "components_program_results.volunteersParticipated",
      defaultMessage: "Số tình nguyện viên tham gia",
    },
    beneficiaries: {
      id: "components_program_results.beneficiaries",
      defaultMessage: "Số người được hỗ trợ",
    },
    fundsRaised: {
      id: "components_program_results.fundsRaised",
      defaultMessage: "Số tiền quyên góp",
    },
    giftsDistributed: {
      id: "components_program_results.giftsDistributed",
      defaultMessage: "Số phần quà đã phát",
    },
    mealsServed: {
      id: "components_program_results.mealsServed",
      defaultMessage: "Số suất ăn đã phục vụ",
    },
    scholarshipsAwarded: {
      id: "components_program_results.scholarshipsAwarded",
      defaultMessage: "Số suất học bổng",
    },
    scholarshipAmount: {
      id: "components_program_results.scholarshipAmount",
      defaultMessage: "Giá trị mỗi suất học bổng",
    },
    attendees: {
      id: "components_program_results.attendees",
      defaultMessage: "Số người tham dự",
    },
  };

  if (!labels[name]) {
    console.error(`Label not found for field: ${name}`);
    return null;
  }

  const isStringField = ["fundsRaised", "scholarshipAmount"].includes(name);

  return isStringField ? (
    <TextInput
      label={formatMessage(labels[name])}
      name={name}
      onChange={(e) => onChange({ target: { name, value: e.target.value } })}
      value={value || ""}
      placeholder={formatMessage(labels[name])}
    />
  ) : (
    <NumberInput
      label={formatMessage(labels[name])}
      name={name}
      onChange={(e) => onChange({ target: { name, value: e.target.value } })}
      value={value || 0}
      min={0}
      placeholder={formatMessage(labels[name])}
    />
  );
};

export default ProgramResults;
