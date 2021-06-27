package com.codeoftheweb.salvo_api;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

import java.util.Date;
import java.util.Set;


@Entity
public class Game {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "native")
    @GenericGenerator(name = "native", strategy = "native")
    private long id;
    private Date creationDate;

    @OneToMany(mappedBy="gameI", fetch=FetchType.EAGER)
    Set<GamePlayer> gamePlayers;

    public Game() { creationDate = new Date();}
    public Game(Date creationDate) {
        this.creationDate = creationDate;
    }

    public Long getId() {
        return id;
    }
    public Date getCreationDate() {
        return creationDate;
    }

}
