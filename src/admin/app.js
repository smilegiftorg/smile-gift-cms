export default {
  config: {
    locales: ["vi"],
    translations: {
      vi: {
        "components_program_results.volunteersParticipated":
          "Số tình nguyện viên tham gia",
        "components_program_results.beneficiaries": "Số người được hỗ trợ",
        "components_program_results.fundsRaised": "Số tiền quyên góp",
        "components_program_results.giftsDistributed": "Số phần quà đã phát",
        "components_program_results.mealsServed": "Số suất ăn đã phục vụ",
        "components_program_results.scholarshipsAwarded": "Số suất học bổng",
        "components_program_results.scholarshipAmount":
          "Giá trị mỗi suất học bổng",
        "components_program_results.attendees": "Số người tham dự",
        "components.PreviewButton.button": "Prévisualiser",
        "components.TweetButton.button": "Partager sur Twitter",
      },
      en: {
        "components_program_results.volunteersParticipated":
          "Number of Volunteers Participated",
        "components_program_results.beneficiaries": "Number of Beneficiaries",
        "components_program_results.fundsRaised": "Funds Raised",
        "components_program_results.giftsDistributed":
          "Number of Gifts Distributed",
        "components_program_results.mealsServed": "Number of Meals Served",
        "components_program_results.scholarshipsAwarded":
          "Number of Scholarships Awarded",
        "components_program_results.scholarshipAmount": "Scholarship Amount",
        "components_program_results.attendees": "Number of Attendees",
        "components.PreviewButton.button": "Preview",
        "components.TweetButton.button": "Share on Twitter",
      },
    },
  },
  bootstrap(app) {
    console.log("Bootstrap running"); // Log để kiểm tra
    // Bỏ app.registerComponent vì không được hỗ trợ
  },
};
