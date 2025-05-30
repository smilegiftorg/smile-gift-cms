const strapiFactory =
  require("@strapi/strapi").default || require("@strapi/strapi");

const programs = [
  {
    title: "Chiến dịch sạch đẹp trường học",
    date: "2025-09-15",
    location: "Trường THCS Nguyễn Văn Trỗi",
    description:
      "Chiến dịch dọn dẹp và cải tạo không gian học tập cho học sinh vùng sâu vùng xa.",
    status: "upcoming",
    longDescription: `
        Chiến dịch "Sạch Đẹp Trường Học" được tổ chức bởi CLB Thiện Nguyện Smile Gift nhằm cải thiện môi trường học tập cho các em học sinh tại vùng sâu vùng xa. 
        
        Tình nguyện viên sẽ tham gia sơn sửa lớp học, vệ sinh khuôn viên và hỗ trợ tặng dụng cụ học tập. Đây là hoạt động thiết thực giúp lan tỏa tinh thần trách nhiệm và sự quan tâm đến giáo dục cộng đồng.
      `,
    category: "Gây quỹ",
    maxAttendees: 50,
    image: 2,
    priority: 1,
    sections: [
      {
        __component: "program.schedules",
        schedules: [
          { time: "07:30 - 08:00", activity: "Tập trung và điểm danh" },
          { time: "08:00 - 10:00", activity: "Sơn sửa lớp học" },
          { time: "10:00 - 11:30", activity: "Vệ sinh khuôn viên trường" },
          { time: "11:30 - 13:00", activity: "Nghỉ trưa, ăn nhẹ" },
          { time: "13:00 - 15:00", activity: "Tặng quà và dụng cụ học tập" },
          { time: "15:00 - 15:30", activity: "Tổng kết và chụp hình lưu niệm" },
        ],
      },
      {
        __component: "program.results",
        volunteersParticipated: 30,
        beneficiaries: 120,
        fundsRaised: "5,000,000 VNĐ",
        giftsDistributed: 120,
        mealsServed: 60,
        scholarshipsAwarded: 0,
        scholarshipAmount: "",
        attendees: 45,
      },
    ],
  },
  {
    title: 'Đêm nhạc "Yêu Là Đủ" gây quỹ phát cơm',
    date: "2025-07-28",
    location: "Nhà văn hóa Q3",
    description:
      "Chương trình âm nhạc đặc biệt với sự tham gia của các nghệ sĩ trẻ, gây quỹ cho hoạt động phát cơm từ thiện.",
    status: "upcoming",
    longDescription: `
        Đêm nhạc "Yêu Là Đủ" là sự kiện âm nhạc đặc biệt được tổ chức nhằm gây quỹ cho hoạt động phát cơm từ thiện cho người vô gia cư và người khó khăn tại Thành phố Hồ Chí Minh.
  
        Chương trình sẽ diễn ra với sự tham gia của các nghệ sĩ trẻ tài năng, mang đến không gian âm nhạc chất lượng và ý nghĩa. Toàn bộ số tiền thu được từ việc bán vé và các hoạt động gây quỹ trong sự kiện sẽ được dành cho việc tổ chức các suất cơm từ thiện trong 6 tháng tiếp theo.
      `,
    category: "Gây quỹ",
    maxAttendees: 200,
    image: 2,
    priority: 2,
    sections: [
      {
        __component: "program.schedules",
        schedules: [
          { time: "18:00 - 19:00", activity: "Đón khách, check-in" },
          { time: "19:00 - 19:15", activity: "Phát biểu khai mạc" },
          { time: "19:15 - 20:30", activity: "Chương trình âm nhạc phần 1" },
          {
            time: "20:30 - 21:00",
            activity: "Giới thiệu về hoạt động phát cơm từ thiện",
          },
          { time: "21:00 - 22:00", activity: "Chương trình âm nhạc phần 2" },
          { time: "22:00 - 22:30", activity: "Kết thúc chương trình, cảm ơn" },
        ],
      },
      {
        __component: "program.results",
        volunteersParticipated: 30,
        attendees: 300,
        fundsRaised: "50,000,000 VNĐ",
        mealsServed: 0,
        scholarshipsAwarded: 0,
      },
    ],
  },
  {
    title: "Công quả tại Chùa Phổ Quang",
    date: "2025-08-10",
    location: "Tân Bình",
    description:
      "Hoạt động công quả tại chùa, hỗ trợ công tác chuẩn bị và phân phát thực phẩm cho người nghèo.",
    status: "upcoming",
    longDescription: `
        Chương trình công quả tại Chùa Phổ Quang là hoạt động thường niên của CLB Thiện Nguyện Smile Gift, nhằm hỗ trợ công tác chuẩn bị và phân phát thực phẩm cho người nghèo tại khu vực quận Tân Bình.
  
        Các tình nguyện viên sẽ tham gia vào các công việc như sơ chế thực phẩm, nấu ăn, đóng gói và phân phát suất ăn cho người có hoàn cảnh khó khăn. Đây không chỉ là hoạt động ý nghĩa về mặt xã hội mà còn giúp mỗi người tham gia có cơ hội tích đức và rèn luyện đức tính kiên nhẫn, yêu thương.
      `,
    category: "Công quả",
    maxAttendees: 50,
    image: 2,
    priority: 2,
    sections: [
      {
        __component: "program.schedules",
        schedules: [
          { time: "06:00 - 07:00", activity: "Tập trung tại chùa" },
          {
            time: "07:00 - 09:00",
            activity: "Sơ chế thực phẩm, chuẩn bị nấu ăn",
          },
          { time: "09:00 - 11:00", activity: "Nấu ăn, chuẩn bị suất cơm" },
          { time: "11:00 - 13:00", activity: "Phân phát suất ăn" },
          { time: "13:00 - 14:00", activity: "Dọn dẹp, tổng kết" },
        ],
      },
      {
        __component: "program.results",
        volunteersParticipated: 40,
        beneficiaries: 150,
        mealsServed: 300,
        giftsDistributed: 150,
      },
    ],
  },
  {
    title: "Chương trình mổ mắt từ thiện",
    date: "2025-08-25",
    location: "Bệnh viện Mắt Tp.HCM",
    description:
      "Hỗ trợ chi phí phẫu thuật mắt cho các bệnh nhân nghèo tại khu vực nông thôn.",
    status: "upcoming",
    longDescription: `
        Chương trình mổ mắt từ thiện là hoạt động y tế cộng đồng ý nghĩa, nhằm hỗ trợ chi phí phẫu thuật mắt cho các bệnh nhân nghèo tại khu vực nông thôn, giúp họ có cơ hội phục hồi thị lực và cải thiện chất lượng cuộc sống.
  
        Với sự hỗ trợ từ các bác sĩ chuyên khoa mắt tại Bệnh viện Mắt Tp.HCM cùng đội ngũ tình nguyện viên y tế, chương trình dự kiến thực hiện 50 ca phẫu thuật mắt miễn phí cho người có hoàn cảnh khó khăn. Đây là chương trình thiết thực, mang lại giá trị lâu dài cho người dân, đặc biệt là người cao tuổi ở các vùng nông thôn xa xôi.
      `,
    category: "Y tế",
    maxAttendees: 20,
    image: 2,
    priority: 2,
    sections: [
      {
        __component: "program.schedules",
        schedules: [
          { time: "07:00 - 08:00", activity: "Đón tiếp bệnh nhân" },
          {
            time: "08:00 - 09:00",
            activity: "Khám sàng lọc, chuẩn bị phẫu thuật",
          },
          { time: "09:00 - 16:00", activity: "Thực hiện các ca phẫu thuật" },
          {
            time: "16:00 - 17:00",
            activity: "Tổng kết, hướng dẫn chăm sóc hậu phẫu",
          },
        ],
      },
      {
        __component: "program.results",
        volunteersParticipated: 20,
        beneficiaries: 50,
      },
    ],
  },
  {
    title: "Công quả ở Tổ Đình Phật Bửu",
    date: "2025-03-15",
    location: "Quận 10, TP.HCM",
    description:
      "Chương trình công quả tại Tổ Đình Phật Bửu, phân phát thực phẩm và quà cho người già neo đơn.",
    status: "completed",
    longDescription: `
        Chương trình công quả tại Tổ Đình Phật Bửu là hoạt động định kỳ của CLB Thiện Nguyện Smile Gift, nhằm hỗ trợ phân phát thực phẩm và quà cho người già neo đơn trong khu vực quận 10.
  
        Trong chương trình này, ngoài việc trao tặng các suất quà, các tình nguyện viên còn tham gia vào việc dọn dẹp, trang trí chùa và tổ chức các hoạt động văn nghệ nhỏ để mang lại niềm vui cho người cao tuổi. Hoạt động đã diễn ra thành công tốt đẹp với sự tham gia của 40 tình nguyện viên và đã trao tặng 150 suất quà cho người già neo đơn.
      `,
    category: "Công quả",
    maxAttendees: 40,
    image: 2,
    priority: 2,
    sections: [
      {
        __component: "program.results",
        volunteersParticipated: 40,
        beneficiaries: 150,
        fundsRaised: "10,000,000 VNĐ",
        giftsDistributed: 150,
        mealsServed: 300,
      },
    ],
  },
  {
    title: 'Đêm nhạc gây quỹ "ĐÊM"',
    date: "2025-03-05",
    location: "Nhà văn hóa Thanh Niên",
    description:
      'Đêm nhạc gây quỹ với chủ đề "ĐÊM", quyên góp được 50 triệu đồng cho quỹ học bổng sinh viên.',
    status: "completed",
    longDescription: `
        Đêm nhạc gây quỹ với chủ đề "ĐÊM" là sự kiện văn hóa nghệ thuật được tổ chức nhằm quyên góp tiền cho quỹ học bổng sinh viên nghèo vượt khó. Chương trình đã diễn ra thành công tốt đẹp tại Nhà văn hóa Thanh Niên với sự tham gia của nhiều nghệ sĩ nổi tiếng.
  
        Sự kiện đã thu hút được hơn 300 khán giả tham dự và quyên góp được 50 triệu đồng. Số tiền này đã được sử dụng để trao 25 suất học bổng, mỗi suất trị giá 2 triệu đồng cho các sinh viên có hoàn cảnh khó khăn nhưng vẫn nỗ lực học tập.
      `,
    category: "Gây quỹ",
    maxAttendees: 300,
    image: 2,
    priority: 2,
    sections: [
      {
        __component: "program.results",
        volunteersParticipated: 30,
        attendees: 300,
        fundsRaised: "50,000,000 VNĐ",
        scholarshipsAwarded: 25,
        scholarshipAmount: "2,000,000 VNĐ",
      },
    ],
  },
  {
    title: "Tặng quà Tết cho người vô gia cư",
    date: "2025-01-20",
    location: "Trung tâm TP.HCM",
    description:
      "Chương trình tặng quà Tết cho người vô gia cư tại khu vực trung tâm thành phố.",
    status: "completed",
    longDescription: `
        Chương trình tặng quà Tết cho người vô gia cư là hoạt động thường niên của CLB Thiện Nguyện Smile Gift vào dịp Tết Nguyên đán. Hoạt động nhằm mang không khí Tết đến với những người kém may mắn, giúp họ cảm nhận được sự ấm áp, yêu thương trong những ngày đầu năm mới.
  
        Năm nay, chương trình đã trao tặng 200 suất quà Tết, bao gồm các nhu yếu phẩm, bánh kẹo, lì xì và các vật dụng cần thiết cho người vô gia cư tại khu vực trung tâm thành phố. Hoạt động đã nhận được sự hỗ trợ nhiệt tình từ 50 tình nguyện viên và các nhà hảo tâm.
      `,
    category: "Tặng quà",
    maxAttendees: 50,
    image: 2,
    priority: 2,
    sections: [
      {
        __component: "program.results",
        volunteersParticipated: 50,
        beneficiaries: 200,
        fundsUsed: "40,000,000 VNĐ",
        giftsDistributed: 200,
        foodServings: 400,
      },
    ],
  },
];

async function seed() {
  const app = await strapiFactory();
  await app.load();

  try {
    const existingPrograms = await app.entityService.findMany(
      "api::program.program",
      { fields: ["title"] }
    );

    for (const program of programs) {
      const existingProgram = existingPrograms.find(
        (p) => p.title === program.title
      );

      const categoryEntity = await app.entityService.findMany(
        "api::category.category",
        {
          filters: { name: program.category },
        }
      );

      if (!categoryEntity.length) {
        console.warn(`Category not found: ${program.category}`);
        continue;
      }

      const categoryId = categoryEntity[0].id;

      const dataToSave = {
        ...program,
        category: categoryId,
        image: program.image || null,
      };

      if (existingProgram) {
        await app.entityService.update(
          "api::program.program",
          existingProgram.id,
          { data: dataToSave }
        );
        console.log(`Updated program: ${program.title}`);
      } else {
        await app.entityService.create("api::program.program", {
          data: dataToSave,
        });
        console.log(`Created program: ${program.title}`);
      }
    }

    console.log("Programs seeding completed.");
  } catch (error) {
    console.error("Error seeding programs:", error?.details);
  } finally {
    await app.destroy();
  }
}

seed();
