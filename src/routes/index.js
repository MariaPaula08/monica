import { Router } from "express"
const router = Router()

router.get('/',(req, res) => res.render('index', {title: 'Design Monika'}))
router.get('/design',(req, res) => res.render('design', {title: 'Design'}))
router.get('/contact',(req, res) => res.render('contact', {title: 'Contct'}))
router.get('/quienSomos',(req, res) => res.render('quienSomos', {title: 'Quienes Somos'}))

export default router