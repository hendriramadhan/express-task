const router = require("express").Router();

let mahasiswa = [
  {
    id: "1",
    nama: "hendri",
    prodi: "teknik informatika",
  },
  {
    id: "2",
    nama: "samsul",
    prodi: "teknik informatika",
  },
  {
    id: "3",
    nama: "bahrun",
    prodi: "teknik informatika",
  },
];

let smartphone = [
  {
    id: "1",
    brand: "huawei",
    type: "nova 5t",
  },
  {
    id: "2",
    brand: "apple",
    type: "promag",
  },
  {
    id: "3",
    brand: "xiaomi",
    type: "redmi",
  },
];

router.get("/", (req, res) => {
  res.json(mahasiswa);
});

router.get("/smartphone", (req, res) => {
  res.json(smartphone);
});

router.get("/smartphone/:brand", (req, res) => {
  let data = smartphone.filter((e) => e.brand.includes(req.params.brand));
  if (data.length === 0) {
    data = {
      status: "not found",
      message: "smartphone tidak ditemukan",
    };
  }
  res.json(data);
});

module.exports = router;
