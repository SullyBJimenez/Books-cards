function Book({data}) {

    return (
        <div class="card">
        <h5 class="card-header">{data.title}</h5>
        <div class="card-body">
            <h5>{data.subtitle}</h5>
                
                <table class="table">
                    <tbody>
                    <tr>
                        <td class="text-success font-weight-bold">Title:</td>
                        <td>{data.title}</td>
                    </tr>
                    <tr>
                        <td class="text-success font-weight-bold">Subtitle:</td>
                        <td>{data.subtitle}</td>
                    </tr>
                    <tr>
                        <td class="text-success font-weight-bold">Author:</td>
                        <td>{data.author}</td>
                    </tr>
                    <tr>
                        <td class="text-success font-weight-bold">Publisher:</td>
                        <td>{data.publisher}</td>
                    </tr>
                    <tr>
                        <td class="text-success font-weight-bold">Description:</td>
                        <td>{data.description}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        );
    }

