Team name and members (with roles): o Project Lead – Acapulco, John Cedric M. o Documenter – Omolida, Rafaello Kotaro Z. o Diagrammer – Datinguinoo, Jade Abegail A. o Presenter – Echanova, Neil Franklin S.

• Project title (tentative): MISMO: Management Information System for Monitoring Operation

• Short description of the system to be integrated: The University Technical Issue Reporting System is a web-based platform for managing technical issues for Mindoro State University (MinSU) staff and faculty. The system will be used by MinSU staff to submit requests and will be handled by MIS administrators and support staff. The system is a structured ticketing system that processes requests using a First-In, First-Out (FIFO) principle. Authorized MinSU staff and faculty access the system with their university credentials to submit tickets, which are classified by issue type such as network, hardware, or software. The MIS administrators and staff manage the system through an administrative dashboard to view, assign, and resolve tickets from all departments. An automated notification system provides updates to MinSU users on the status of their tickets via email or SMS. Solutions from resolved tickets are added to a knowledge base to assist the MIS team with future issues. The system provides reporting and analytics tools for the MIS administrators, offering data on ticket volume, resolution times, and frequent problems. This information helps the MIS office with resource allocation and long-term IT planning to support the university's operations. The platform is built to be available, secure, and scalable to meet MinSU's requirements.

• Repository usage notes (how to clone/run if applicable)

Using HTTPS
git clone https://github.com/jadeabegaild/ITE412_SIA2_TeamMismo.git

Install dependencies
composer install

Copy environment file
cp .env.example .env

Generate application key
php artisan key:generate

Run migrations
php artisan migrate

Start local server
php artisan serve
