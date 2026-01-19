/* Base styles */
body {
    margin: 0;
    font-family: Arial, sans-serif;
    line-height: 1.6;
    color: #333;
}
.container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Header and Navigation */
header {
    background-color: #0066cc;
    color: #fff;
}
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1000px;
    margin: 0 auto;
    padding: 10px 20px;
}
.logo {
    font-size: 1.5em;
    font-weight: bold;
}
.nav-links {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
}
.nav-links li a {
    color: #fff;
    text-decoration: none;
    margin-left: 20px;
    transition: color 0.3s;
}
.nav-links li a:hover {
    color: #ffcc00;
}
.nav-toggle {
    display: none;
    background: none;
    border: 2px solid #fff;
    color: #fff;
    padding: 5px 10px;
    font-size: 1em;
    cursor: pointer;
}

/* Hero Section */
.hero {
    text-align: center;
    padding: 80px 20px;
}
.hero h1 {
    margin: 0 0 20px;
    font-size: 2.5em;
}
.hero p {
    font-size: 1.2em;
    margin-bottom: 20px;
}
.hero .btn {
    background-color: #ffcc00;
    color: #333;
    padding: 10px 20px;
    border: none;
    font-size: 1em;
}

/* Features Section */
.features {
    background: #f9f9f9;
    padding: 40px 20px;
    text-align: center;
}
.features h2 {
    margin-bottom: 20px;
}
.feature-cards {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}
.card {
    background: #fff;
    border: 1px solid #ddd;
    padding: 20px;
    margin: 10px;
    flex: 1 1 250px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}
.card h3 {
    margin-top: 0;
}

/* How It Works Section */
.how-it-works {
    padding: 40px 20px;
    text-align: center;
}
.how-it-works ol {
    margin: 0 auto;
    max-width: 600px;
    text-align: left;
}
.how-it-works ol li {
    margin-bottom: 10px;
}

/* Trusted By Section */
.trust {
    background: #f0f0f0;
    padding: 40px 20px;
    text-align: center;
}
.trust h2 {
    margin-bottom: 10px;
}

/* Auth Section (Login/Signup) */
.auth-section {
    max-width: 400px;
    margin: 40px auto;
    text-align: center;
}
.tab-container {
    display: flex;
    margin-bottom: 20px;
}
.tab {
    flex: 1;
    padding: 10px;
    background: #eee;
    border: none;
    cursor: pointer;
}
.tab.active {
    background: #0066cc;
    color: #fff;
}
.form-container {
    border: 1px solid #ddd;
    padding: 20px;
    background: #fff;
}
.form-container form {
    display: flex;
    flex-direction: column;
}
.form-container label {
    margin: 10px 0 5px;
    text-align: left;
}
.form-container input,
.form-container select,
.form-container textarea {
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
}
.form-container .btn {
    background: #0066cc;
    color: #fff;
    border: none;
    padding: 10px;
    cursor: pointer;
}
.hidden {
    display: none;
}

/* Upload Section */
.upload-section {
    max-width: 600px;
    margin: 40px auto;
    padding: 20px;
}
.upload-section h2 {
    text-align: center;
    margin-bottom: 20px;
}
.upload-section form {
    display: flex;
    flex-direction: column;
}
.upload-section label {
    margin: 10px 0 5px;
}
.upload-section input,
.upload-section textarea {
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
}
.upload-section .btn {
    background: #0066cc;
    color: #fff;
    border: none;
    padding: 10px;
    cursor: pointer;
}

/* Dashboard Section */
.dashboard {
    max-width: 800px;
    margin: 40px auto;
    padding: 20px;
}
.dashboard h2 {
    text-align: center;
}
.dashboard input[type="search"] {
    width: 100%;
    padding: 8px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
}
.dashboard table {
    width: 100%;
    border-collapse: collapse;
}
.dashboard th, .dashboard td {
    padding: 10px;
    border: 1px solid #ddd;
    text-align: left;
}
.dashboard th {
    background: #0066cc;
    color: #fff;
}

/* Pricing Section */
.pricing {
    padding: 40px 20px;
    text-align: center;
}
.pricing h2 {
    margin-bottom: 20px;
}
.plan-cards {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}
.plan-card {
    border: 1px solid #ddd;
    padding: 20px;
    margin: 10px;
    flex: 1 1 200px;
}
.plan-card.featured {
    border-color: #0066cc;
    background: #e6f0ff;
}
.plan-card h3 {
    margin-top: 0;
}
.plan-card .price {
    font-size: 2em;
    margin: 10px 0;
}
.plan-card ul {
    list-style: none;
    padding: 0;
}
.plan-card ul li {
    margin: 10px 0;
    text-align: left;
}

/* Footer */
footer {
    background: #0066cc;
    color: #fff;
    text-align: center;
    padding: 10px 0;
    margin-top: 40px;
}

/* Responsive */
@media (max-width: 768px) {
    .nav-links {
        display: none;
        flex-direction: column;
    }
    .nav-links.active {
        display: flex;
    }
    .nav-toggle {
        display: block;
    }
    .feature-cards {
        flex-direction: column;
    }
    .plan-cards {
        flex-direction: column;
    }
}
