export default function handler(req, res) {
    if (!req.query.slug) {
        return res.status(401).json({message: "Invalid slug"});
    }

    res.setPreviewData({});
    res.redirect(`/sosialhjelp/${req.query.slug}`);
}
