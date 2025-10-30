# Surveys

<style>
h1 {
    text-align: center;
    font-size: 2rem !important;
    margin-bottom: 0.25rem !important;
}

.survey-gallery {
    text-align: center;
    padding: 3rem 2rem;
    color: #c8b7f0;
}

.card-grid {
    display: grid;
    gap: 1rem;
    max-width: 900px;
    margin: 0 auto;
}

.survey-card {
    background-color: rgba(26, 10, 40, 0.5);
    border: .1rem solid;
    border-color: var(--md-primary-fg-color);
    border-radius: 2rem;
    padding: 0 2rem;
    text-decoration: none;
    transition: all 0.25s ease;
    box-shadow: 0 0 10px rgba(150, 100, 255, 0.1);
    backdrop-filter: blur(8px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 300px;
    transition: all 200ms ease !important;
}
.survey-card:hover {
    background-color: var(--md-primary-fg-color);
    transform: translateY(-4px);
    box-shadow: 0 0 24px rgba(123, 0, 255, 0.5);
    color: #ffffff;
    text-shadow: 0 0 4px #00000050;
}

.survey-card h2 {
    margin-top: 0;
    margin-bottom: 0;
    color: #dcc0ffff;
    font-size: 1.25rem;
    font-variation-settings: 'wght' 500;
    transition: all 200ms ease !important;
}
.survey-card:hover h2 {
    color: #ffffff;
    text-shadow: 0 0 4px #00000050;
}

.survey-card .date {
    color: #816da5ff;
    font-size: 0.8rem;
    margin-top: 0;
    margin-bottom: 0;
}
.survey-card p {
    margin-bottom: 0.1rem;
    color: #b298e2ff;
    font-size: 0.9rem;
    font-variation-settings: 'wght' 350;
    transition: all 200ms ease !important;
}
.survey-card:hover p {
    color: #ffffff;
    text-shadow: 0 0 4px #00000050;
}
</style>

<div class="survey-gallery">
    <div class="card-grid">
        <a class="survey-card" href="4tran2025">
            <h2>The 2025 4tran Survey</h2>
            <p class="date">September 30 – October 6, 2025</p>
            <p>Results and analysis of a survey conducted across various 4tran communities</p>
        </a>
    </div>
</div>