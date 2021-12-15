const express = require('express');
const router = express.Router();

//로그인
router.post("/log-in", (req,res) => {
    id, pw = req.body;
    //성공여부 반환
});

//로그아웃
router.post("/log-out", (req,res) => {
    //be에 쿼리 안 해도 되지 않나?
    //성공여부 반환
});

//회원가입
router.post("/sign-up", (req,res) => {
    id, pw = req.body;
    //성공여부 반환
});

//회원탈퇴
router.post("/resign", (req,res) => {
    id, pw = req.body;
    //성공여부 반환
});


module.exports = router;