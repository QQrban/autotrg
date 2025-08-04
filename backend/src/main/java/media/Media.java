package media;

import com.autotrade.car.Car;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "media")
public class Media {
    @Id
    @GeneratedValue
    private Integer id;

    private String vehicleId;

    private String url;

    private Boolean isMainPhoto;

    @ManyToOne
    @JoinColumn
    private Car car;
}
