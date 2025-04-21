const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
    // Emojis
    {
        url: 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/rocket.png',
        name: 'rocket.png',
        dir: 'emojis'
    },
    {
        url: 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/gear.png',
        name: 'gear.png',
        dir: 'emojis'
    },
    {
        url: 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/globe-with-meridians.png',
        name: 'globe.png',
        dir: 'emojis'
    },
    {
        url: 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/mobile-phone.png',
        name: 'mobile.png',
        dir: 'emojis'
    },
    {
        url: 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/cloud.png',
        name: 'cloud.png',
        dir: 'emojis'
    },
    {
        url: 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/briefcase.png',
        name: 'briefcase.png',
        dir: 'emojis'
    },
    {
        url: 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/information.png',
        name: 'information.png',
        dir: 'emojis'
    },
    {
        url: 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/envelope.png',
        name: 'envelope.png',
        dir: 'emojis'
    },
    {
        url: 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/link.png',
        name: 'link.png',
        dir: 'emojis'
    },
    {
        url: 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/backhand-index-pointing-right.png',
        name: 'pointing.png',
        dir: 'emojis'
    },
    // Background Images
    {
        url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80',
        name: 'space-bg.jpg',
        dir: 'backgrounds'
    },
    {
        url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80',
        name: 'tech-bg.jpg',
        dir: 'backgrounds'
    },
    // Service Icons
    {
        url: 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/computer.png',
        name: 'web-dev.png',
        dir: 'services'
    },
    {
        url: 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/mobile-phone.png',
        name: 'mobile-dev.png',
        dir: 'services'
    },
    {
        url: 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/cloud.png',
        name: 'cloud-dev.png',
        dir: 'services'
    },
    // Industry Icons
    {
        url: 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/hospital.png',
        name: 'healthcare.png',
        dir: 'industries'
    },
    {
        url: 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/money-bag.png',
        name: 'finance.png',
        dir: 'industries'
    },
    {
        url: 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/shopping-cart.png',
        name: 'retail.png',
        dir: 'industries'
    },
    // Process Icons
    {
        url: 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/magnifying-glass.png',
        name: 'discovery.png',
        dir: 'process'
    },
    {
        url: 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/calendar.png',
        name: 'planning.png',
        dir: 'process'
    },
    {
        url: 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/gear.png',
        name: 'development.png',
        dir: 'process'
    },
    {
        url: 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/package.png',
        name: 'delivery.png',
        dir: 'process'
    },
    // Expertise Icons
    {
        url: 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/cloud.png',
        name: 'cloud-computing.png',
        dir: 'expertise'
    },
    {
        url: 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/robot.png',
        name: 'ai-ml.png',
        dir: 'expertise'
    },
    {
        url: 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/shield.png',
        name: 'cybersecurity.png',
        dir: 'expertise'
    },
    // Social Media Icons
    {
        url: 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/link.png',
        name: 'linkedin.png',
        dir: 'social'
    },
    {
        url: 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/link.png',
        name: 'twitter.png',
        dir: 'social'
    },
    {
        url: 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/link.png',
        name: 'github.png',
        dir: 'social'
    }
];

const downloadImage = (url, filename, dir) => {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(path.join(__dirname, '../public/assets', dir, filename));
        https.get(url, (response) => {
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                console.log(`Downloaded ${dir}/${filename}`);
                resolve();
            });
        }).on('error', (err) => {
            fs.unlink(filename, () => {});
            reject(err);
        });
    });
};

const downloadAllImages = async () => {
    for (const image of images) {
        try {
            await downloadImage(image.url, image.name, image.dir);
        } catch (error) {
            console.error(`Error downloading ${image.dir}/${image.name}:`, error);
        }
    }
};

downloadAllImages(); 