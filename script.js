const movies = [
    {
        date: 'July 26, 2024',
        image: 'https://variety.com/wp-content/uploads/2023/07/F0r6GbQacAUng-4-1.jpg',
        logo: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1ebd221d-3581-4775-8f4c-086c377bc4c3/dff0evl-d7505add-fec5-446b-bae6-79a18d53f407.png/v1/fill/w_1280,h_854/deadpool_3_logo_png_by_docbuffflash82_dff0evl-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODU0IiwicGF0aCI6IlwvZlwvMWViZDIyMWQtMzU4MS00Nzc1LThmNGMtMDg2YzM3N2JjNGMzXC9kZmYwZXZsLWQ3NTA1YWRkLWZlYzUtNDQ2Yi1iYWU2LTc5YTE4ZDUzZjQwNy5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.vGN0IWdsf4jnLDNSYPZKQ8ermR3xa0-M4zyoIOJtS9I'
    },
    {
        date: 'August 30, 2024',
        image: 'https://ew.com/thmb/3N9Zl8BSbQXSXQFGYOD60MuR52g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/kraven-the-hunter-061923-68-5f8fb55dc0ef42b682a12935f294f8f7.jpg',
        logo: 'https://static.wikia.nocookie.net/logopedia/images/e/e5/Marvels_Kraven_the_Hunter_2023.png/revision/latest?cb=20230620205133'
    }
]

document.body.style.backgroundImage = `url(${movies[0].image})`;
document.querySelector('#logo').src = movies[0].logo;

const countdown = () => {
    const countDate = new Date(`${movies[0].date} 00:00:00`).getTime()
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    document.querySelector('.day').innerText = textDay;
    document.querySelector('.hour').innerText = textHour;
    document.querySelector('.minute').innerText = textMinute;
    document.querySelector('.second').innerText = textSecond;
}

countdown();

setInterval(function(){
    countdown();
}, 1000);